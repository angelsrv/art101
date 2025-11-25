


let sceneLocation = "Book Pages";

// Characters 
let who = ["Jotaro", "Star Platinum", "Avdol", "Kakyoin", "Polnareff", "Iggy"];

// Title and description
let envTitle = "Dio’s Mansion";
let description = "The final battleground — a dark, luxurious mansion in Cairo where Dio awaits the Stardust Crusaders.";

// environment elements
let elements = [
  "Grand staircase",
  "Blood-red carpet",
  "Ancient portraits on the walls",
  "Echoing halls",
  "DIO’s chilling presence"
];

// characters (objects)
let crusaders = [
  {
    name: "Jotaro Kujo",
    stand: "Star Platinum",
    ability: "Time Stop (Star Platinum: The World)",
    quote: "Yare yare daze."
  },
  {
    name: "Joseph Joestar",
    stand: "Hermit Purple",
    ability: "Spirit Photography / Hamon Conduction",
    quote: "OH MY GOOOOOOOD!"
  },
  {
    name: "Noriaki Kakyoin",
    stand: "Hierophant Green",
    ability: "Emerald Splash",
    quote: "rerorerorero..."
  },
  {
    name: "Jean Pierre Polnareff",
    stand: "Silver Chariot",
    ability: "Super Speed & Swordsmanship",
    quote: "It’s time for justice!"
  },
  {
    name: "Muhammad Avdol",
    stand: "Magician’s Red",
    ability: "Flame Control",
    quote: "CROSS FIRE HURRICANE!"
  },
  {
    name: "Iggy",
    stand: "The Fool",
    ability: "Sand Constructs",
    quote: "WOOF"
  }
];

// Output to HTML
$(document).ready(function() {
  // Set page title
  $("#title").text(envTitle);

    // New: Function to change character mood based on Stand ability strength
  function changeMood(characterName, abilityPowerLevel) {

    let message = "";

    if (abilityPowerLevel > 80) {
      message = `${characterName} is feeling **POWERFUL** and ready to fight!`;
    } else if (abilityPowerLevel > 40) {
      message = `${characterName} is feeling **confident** but cautious.`;
    } else {
      message = `${characterName} is feeling **worried**... The enemy may be too strong.`;
    }

    $("#status").text(message);
  }

  // Trigger the function using a button click
  $("#changeMoodBtn").click(function() {
    // Example: Jotaro’s power level changed by story conditions
    changeMood("Jotaro Kujo", 95);
  });


  // Print location info
  $("#location").append(`<h3>Location: ${sceneLocation}</h3>`);

  // Print description and environment features
  $("#output").append(`<p>${description}</p>`);
  $("#output").append("<h3>Environment Features:</h3>");
  $("#output").append("<ul>");
  elements.forEach(item => {
    $("#output").append(`<li>${item}</li>`);
  });
  $("#output").append("</ul>");

  // Print characters section
  $("#characters").append("<h3>The Stardust Crusaders & DIO</h3>");
  crusaders.forEach(c => {
    $("#characters").append(`
      <div class="character">
        <h4>${c.name}</h4>
        <p><strong>Stand:</strong> ${c.stand}</p>
        <p><strong>Ability:</strong> ${c.ability}</p>
        <p><em>"${c.quote}"</em></p>
      </div>
    `);
  });
});
