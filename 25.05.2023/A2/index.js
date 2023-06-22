// Variable
let topPosition = 50;
let leftPosition = 50;
let pixelMove = 1;

// Connections
const theme = document.getElementById("my-theme");
const text = document.getElementById("text");
const colorsOption = document.getElementById("select");
const textBox = document.getElementById("text-box");

// Functions
function darkTheme() {
  if (theme) {
    // BG Color
    theme.style.backgroundColor = "black";
    // TXT Color
    theme.style.color = "white";
  }
}

function whiteTheme() {
  if (theme) {
    // BG Color
    theme.style.backgroundColor = "white";
    // TXT Color
    theme.style.color = "black";
  }
}

function changeColor() {
  if (theme) {
    // TXT Color
    theme.style.color = colorsOption.value;
  }
}

function down() {
  if (textBox) {
    let topEndPosition = topPosition + pixelMove;
    textBox.style.top = topEndPosition + "%";
    console.log(topEndPosition);
    topPosition = topEndPosition;
  }
}

function up() {
  if (textBox) {
    let topEndPosition = topPosition - pixelMove;
    textBox.style.top = topEndPosition + "%";
    console.log(topEndPosition);
    topPosition = topEndPosition;
  }
}

function right() {
  if (textBox) {
    let leftEndPosition = leftPosition + pixelMove;
    textBox.style.left = leftEndPosition + "%";
    console.log(leftEndPosition);
    leftPosition = leftEndPosition;
  }
}

function left() {
  if (textBox) {
    let leftEndPosition = leftPosition - pixelMove;
    textBox.style.left = leftEndPosition + "%";
    console.log(leftEndPosition);
    leftPosition = leftEndPosition;
  }
}
