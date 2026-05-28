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

// 2. Function to display info when HP5 is clicked
hp5Image.addEventListener('click', () => {
    outputBox.innerHTML = `
        <h2>${environmentTitle}</h2>
        <p><strong>Atmosphere:</strong> ${environmentFeeling.join(", ")}</p>
    `;
    outputBox.classList.add('show'); // Makes the box visible
});

// 3. Function to display info when PFP (Angel Camera) is clicked
pfpImage.addEventListener('click', () => {
    outputBox.innerHTML = `
        <h2>My Tools & Journey</h2>
        <p>Working with ${environmentElements[0]} and ${environmentElements[1]} to capture fleeting ${environmentElements[3]}.</p>
    `;
    outputBox.classList.add('show');
});

// 4. Function to display info when Tri-X is clicked
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

// Image finder
function askForImage() {
    // Prompt the user and convert their answer to lowercase to make it case-insensitive
    let userInput = prompt("Type in: landscape, portrait, nature, personal");
    
    // chekcs on cancel
    if (userInput === null) {
        return; 
    }

    // Converts user uppercase to lowercase so they all work
    userInput = userInput.toLowerCase();

    // conditionals that relate the word typed to the images
    if (userInput === "landscape") {
        $("#image-result").html('<img src="/art101/art101/Exercises/images/2026-1-10_15_Spotmatic_ColorPlus200_R06_Frame31 copy.jpg" alt="Landscape">');
    } 
    else if (userInput === "portrait") {
        $("#image-result").html('<img src="/art101/art101/Exercises/images/img20260219_23241804 copy.jpg" alt="Portrait">');
    } 
    else if (userInput === "nature") {
        $("#image-result").html('<img src="/art101/art101/Exercises/images/img20260228_20215179 copy.jpg" alt="Nature">');
    } 
    else if (userInput === "personal") {
        $("#image-result").html('<img src="/art101/art101/Exercises/images/2025-12-26-2026-1-_FujifilmDispo_R0_frame11 copy.jpg" alt="Personal">');
    } 
    else {
        // If they typed something else, or misspelled it
        $("#image-result").html('<p style="color: white; background: rgba(0,0,0,0.5); padding: 10px; border-radius: 5px;">Image not found. Please try again and check your spelling!</p>');
    }
}

// Click listener attached to the button
$("#image-finder-btn").click(function () {
    askForImage();
});