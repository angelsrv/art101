let environmentTitle = "The Photolab";
let environmentElements = ["film", "cameras", "photos", "moments"];
let environmentFeeling = ["Raw", "Dramatic", "Moody", "Nostalgic", "Timeless"];

let mainEntity = {
    name: "The Negative",
    type: "Tri-x 400",
    mood: "Punchy",
    color: "Black and White",
    isDeveloped: true,
    favoriteElement: environmentElements[1]
};

const outputBox = document.getElementById('environment-output');
const hp5Image = document.getElementById('hp5');
const pfpImage = document.getElementById('pfp');
const trixImage = document.getElementById('trix');

// Click Functions for Top Images
hp5Image.addEventListener('click', () => {
    outputBox.innerHTML = `
        <h2>${environmentTitle}</h2>
        <p><strong>Atmosphere:</strong> ${environmentFeeling.join(", ")}</p>
    `;
    outputBox.classList.add('show');
});

pfpImage.addEventListener('click', () => {
    outputBox.innerHTML = `
        <h2>My Tools & Journey</h2>
        <p>Working with ${environmentElements[0]} and ${environmentElements[1]} to capture fleeting ${environmentElements[3]}.</p>
    `;
    outputBox.classList.add('show');
});

trixImage.addEventListener('click', () => {
    outputBox.innerHTML = `
        <h2>${mainEntity.name}</h2>
        <p><strong>Film Stock:</strong> ${mainEntity.type}</p>
        <p><strong>Color Profile:</strong> ${mainEntity.color}</p>
        <p><strong>Mood:</strong> ${mainEntity.mood}</p>
        <p><strong>Status:</strong> ${mainEntity.isDeveloped ? "Developed" : "Ready to show images"}</p>
    `;
    outputBox.classList.add('show');
});

// Image Finder Function
function askForImage() {
    let userInput = prompt("Type in: nature, landscape, portrait, personal");
    
    if (userInput === null) {
        return; 
    }

    userInput = userInput.toLowerCase();

    if (userInput === "nature") {
        $("#image-result").html(`
            <div class="image-wrapper">
                <img src="/art101/art101/Exercises/images/img20260228_20215179 copy.jpg" alt="Nature">
                <div class="quote-bubble">I can see you too human...</div>
            </div>
        `);
    } 
    else if (userInput === "landscape") {
        $("#image-result").html(`
            <div class="image-wrapper">
                <img src="/art101/art101/Exercises/images/2026-1-10_15_Spotmatic_ColorPlus200_R06_Frame31 copy.jpg" alt="Landscape">
                <div class="quote-bubble">Las vistas mas hermosas...</div>
            </div>
        `);
    } 
    else if (userInput === "portrait") {
        $("#image-result").html(`
            <div class="image-wrapper">
                <img src="/art101/art101/Exercises/images/img20260219_23241804 copy.jpg" alt="Portrait">
                <div class="quote-bubble">Momentos con mi amor.</div>
            </div>
        `);
    } 
    else if (userInput === "personal") {
        $("#image-result").html(`
            <div class="image-wrapper">
                <img src="/art101/art101/Exercises/images/2025-12-26-2026-1-_FujifilmDispo_R0_frame11 copy.jpg" alt="Personal">
                <div class="quote-bubble">Mateo during Christmas time.</div>
            </div>
        `);
    } 
    else {
        $("#image-result").html('<p style="color: white; background: rgba(0,0,0,0.5); padding: 10px; border-radius: 5px;">Image not found. Please try again and check your spelling!</p>');
    }
}

// Click listener attached to the button
$("#image-finder-btn").click(function () {
    askForImage();
});

// Event Delegation for Hover Bubbles (Handles all wrappers, even injected ones)
$(document).on("mouseenter", ".image-wrapper", function () {
    $(this).find(".quote-bubble").stop(true, true).fadeIn(200);
}).on("mouseleave", ".image-wrapper", function () {
    $(this).find(".quote-bubble").stop(true, true).fadeOut(200);
});