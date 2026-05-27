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