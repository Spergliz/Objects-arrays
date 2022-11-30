// WEB COLORS START

// HTML Variable for Output
let outputEl = document.getElementById("output");

// Load Color Data
let colorData;

fetch("color-data.json")
  .then((rawData) => rawData.json())
  .then((data) => (colorData = data));

// Event Listener on Go Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "all-colors") {
    allColors();
  } else if (selection === "bright-colors") {
    brightColors();
  } else if (selection === "red-pink-families") {
    redPinkFamilies();
  } else if (selection === "family-search") {
    familySearch();
  } else if (selection === "start-letter-search") {
    startLetterSearch();
  }
}

// MENU FUNCTIONS
function allColors() {
  for (let i = 0; i < colorData.length; i++) {
    
    outputEl.innerHTML += `${colorData[i].name} ${colorData[i].hex} <br>`;
  }
}

function brightColors() {
  for(let i =0; i< colorData.length; i++) {
    outputEl.innerHTML += `Name:${colorData[i].name} <br> Brightness:${colorData[i].br } <br>`
  }
}

function redPinkFamilies() {
  // Count Colors in Red/Pink Families
  outputEl.innerHTML = "<h3>Count Red/Pink Family Colors</h3>";
}

function familySearch() {
  // Display Name and Family of all Colors that Match a User Provided Family Name. Also Output a Count of Colors Found.
  outputEl.innerHTML = "<h3>Family Search</h3>";
}

function startLetterSearch() {
  // Display Name of all Colors that Match a User Provided Starting Letter. Also Output a Count of Colors Found.
  outputEl.innerHTML = "<h3>Start Letter Search</h3>";
}
