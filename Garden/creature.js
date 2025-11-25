// store creatures + movement data
let allCreatures = [];

// random name
async function getRandomName() {
   const response = await fetch("https://api.gofakeit.com/funcs/petname");
   return await response.text();
}

// random emoji
async function getRandomEmoji() {
   const response = await fetch("https://api.gofakeit.com/funcs/emojianimal");
   return await response.text();
}

// random color
function randomizeColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// full random creature
async function randomizeCreature() {

   const emoji = await getRandomEmoji();
   const name = await getRandomName();
   const color = randomizeColor();
   const eyes = Math.floor(Math.random() * 5) + 1;

   return {
     name: emoji + " " + name,
     color: color,
     eyesNum: eyes
   };
}

// get form creature
function getCreatureFromForm() {
    return {
        name: $("#crName").val(),
        color: $("#crColor").val(),
        eyesNum: $("#crEyesNum").val()
    };
}

// make HTML
function renderCreature(creature) {
  let crEyesHTML = "";
  for (let i = 0; i < creature.eyesNum; i++) {
    crEyesHTML += "<div class='eye'>.</div>";
  }

  return `
<div class="creature">
  <div class="creature-body" style="background:${creature.color}">
    ${crEyesHTML}
  </div>
  <div class="creature-info">❤️${creature.name}</div>
</div>`;
}

// add to DOM and give movement values
function addCreatureToDOM(creature) {
  let html = renderCreature(creature);
  let $el = $(html);

  // random starting position
  const maxX = $("#creature-list").width() - 120;
  const maxY = $("#creature-list").height() - 120;

  let x = Math.random() * maxX;
  let y = Math.random() * maxY;

  // movement direction
  let dx = (Math.random() * 2 + 1) * (Math.random() < 0.5 ? -1 : 1);
  let dy = (Math.random() * 2 + 1) * (Math.random() < 0.5 ? -1 : 1);

  $el.css({ left: x, top: y });
  $("#creature-list").append($el);

  allCreatures.push({
    element: $el,
    x, y, dx, dy
  });
}

// validity check
function isCreatureValid(c) {
  if (c.name === "") return false;
  if (c.name.length > 12) return false;
  if (c.eyesNum === "" || c.eyesNum > 5) return false;
  return true;
}

// clear fields
function clearForm() {
  $("#crName").val("");
  $("#crColor").val("#ee7dea");
  $("#crEyesNum").val(1);
}

// button: add creature
$("#add-creature").click(async function () {

    let newCreature;

    if ($("#crRandom").is(':checked')) {
      newCreature = await randomizeCreature();
    } else {
      newCreature = getCreatureFromForm();
    }

    if (!isCreatureValid(newCreature)) return;

    addCreatureToDOM(newCreature);
    clearForm();
});

// MOVEMENT LOOP
setInterval(() => {

  const box = $("#creature-list");
  const maxX = box.width() - 120;
  const maxY = box.height() - 120;

  allCreatures.forEach(c => {

    c.x += c.dx;
    c.y += c.dy;

    if (c.x <= 0 || c.x >= maxX) c.dx *= -1;
    if (c.y <= 0 || c.y >= maxY) c.dy *= -1;

    c.element.css({ left: c.x, top: c.y });

  });

}, 30);

