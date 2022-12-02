// WEB COLORS START

// HTML Variable for Output
let outputEl = document.getElementById("output");
let outputE2 = document.getElementById("output2");

// Load Color Data
let colorData;

fetch("color-data.json")
  .then((rawData) => rawData.json())
  .then((data) => (colorData = data));

// Event Listener on Go Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

let color = 0;
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
    outputEl.innerHTML += `${colorData[i].name} ${colorData[i].family} <br>`;
  }
}

function brightColors() {
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].brightness >=200 ){
    outputEl.innerHTML += `Name:${colorData[i].name} <br> Brightness:${colorData[i].br} <br>`;
  }
}
}

function redPinkFamilies() {
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].family === "Red" || colorData[i].family === "Pink") {
      color++;
      outputEl.innerHTML = `number of reds or pinks: ${color}`;
    }
  }
}

function familySearch() {
  let color = 0
  let A = prompt("Enter a Family colour (FIRST LETTER MUST BE CAPITAL)");
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].family === A) {
      color++
      outputEl.innerHTML += `${colorData[i].name}, ${colorData[i].family}<br>`;
      outputE2.innerHTML = `number of colors and familys: ${color}`
    }
  }
}
function startLetterSearch() {
  let h = 0;
  let A = prompt("Enter a Letter to find a colour");
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].name[0] === A) {
      h++
      outputEl.innerHTML += `${colorData[i].name}<br>`;
      outputE2.innerHTML = `number of colors: ${h}`
    }
  }
}
