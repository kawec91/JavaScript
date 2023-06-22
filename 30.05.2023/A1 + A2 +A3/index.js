// Variable
// Array
const list = [3, 7, 4, 56, 10];

// Connection
// Conn with "inhalt"
const element = document.getElementById("inhalt");
// Conn with "ergebnis"
const element2 = document.getElementById("ergebnis");

//Functions
//Variable1 + Variable2 - (const int 2)
function myFunction(j, r) {
  return j + r - 2;
}
// Addieren
function plus(zahl1, zahl2) {
  return zahl1 + zahl2;
}
//Subtrahieren
function minus(zahl1, zahl2) {
  return zahl1 - zahl2;
}
//Multiplizieren
function mal(zahl1, zahl2) {
  return zahl1 * zahl2;
}
//Dividieren
function teilen(zahl1, zahl2) {
  return zahl1 / zahl2;
}

function doForAll(myliste, y) {
  // Print list in console
  console.log("my list: " + list);
  //For every element of list do
  for (x of myliste) {
    //Show in console
    //TEXT TITLE in console
    console.log("///////////// ELEMENT " + x + " /////////////");
    //TEXT TITLE in console
    console.log("--- Addieren ---");
    //x + y
    console.log(x + " + " + y + " = " + plus(x, y));

    //add to HTML
    element2.innerHTML +=
      "<h3>///////////// ELEMENT " + x + " /////////////<h3>";
    element2.innerHTML += "<h5>--- Addieren ---<h5>";
    element2.innerHTML += "<p>" + x + " + " + y + " = " + plus(x, y) + "<p>";

    //Show in console
    //TEXT TITLE in console
    console.log("--- Subtrahieren ---");
    //x - y
    console.log(x + " - " + y + " = " + minus(x, y));

    //add to HTML
    element2.innerHTML += "<h5>--- Subtrahieren ---<h5>";
    element2.innerHTML += "<p>" + x + " - " + y + " = " + minus(x, y) + "<p>";

    //Show in console
    //TEXT TITLE in console
    console.log("--- Multiplizieren ---");
    //x * y
    console.log(x + " * " + y + " = " + mal(x, y));

    //add to HTML
    element2.innerHTML += "<h5>--- Multiplizieren ---<h5>";
    element2.innerHTML += "<p>" + x + " * " + y + " = " + mal(x, y) + "<p>";

    //Show in console
    //TEXT TITLE in console
    console.log("--- Dividieren ---");
    //x / y
    console.log(x + " / " + y + " = " + teilen(x, y));

    //add to HTML
    element2.innerHTML += "<h5>--- Dividieren ---<h5>";
    element2.innerHTML += "<p>" + x + " / " + y + " = " + teilen(x, y) + "<p>";
  }
}

// Test
if (element) {
  // Show conn status in console
  console.log("Connection with id=inhalt: True");
  // Add HTML-Element to element
  element.innerHTML = "<h3>Aufgabe 1</h3>";
  // Add HTML-Element to element
  element.innerHTML += "<p> 2 + 7 -2 = " + myFunction(2, 7) + "</p>";
  // Add HTML-Element to element
  element.innerHTML += "<p> 3 + 9 -2 = " + myFunction(3, 9) + "</p>";
  // Add HTML-Element to element
  element.innerHTML += "<p> 1 + 1 -2 = " + myFunction(1, 1) + "</p>";
  // Add HTML-Element to element
  element.innerHTML += "<p> 2 + 8 -2 = " + myFunction(2, 8) + "</p>";
} else {
  // Show conn status in console
  console.log("Connection with id=inhalt: False");
}

// Test
if (element2) {
  // Show conn status in console
  console.log("Connection with id=ergebnis: True");
  // Add HTML-Element to element2
  element2.innerHTML += "<h3>Aufgabe 2</h3>";
  // Add HTML-Element to element2
  element2.innerHTML += "<p>2 + 7 = " + plus(2, 7) + "</p>";
  // Add HTML-Element to element2
  element2.innerHTML += "<p>4 + 9 = " + plus(4, 9) + "</p>";
  // Add HTML-Element to element2
  element2.innerHTML += "<p>4 - 1 = " + minus(4, 1) + "</p>";
  // Add HTML-Element to element2
  element2.innerHTML += "<p>7 - 5 = " + minus(7, 5) + "</p>";
  // Add HTML-Element to element2
  element2.innerHTML += "<p>3 * 7 = " + mal(3, 7) + "</p>";
  // Add HTML-Element to element2
  element2.innerHTML += "<p>5 * 9 = " + mal(5, 9) + "</p>";
  // Add HTML-Element to element2
  element2.innerHTML += "<p>9 / 4 = " + teilen(9, 4) + "</p>";
  // Add HTML-Element to element2
  element2.innerHTML += "<p>8 / 9 = " + teilen(8, 9) + "</p>";
  element2.innerHTML += "<h1>Array </h1>";
  doForAll(list, 5);
} else {
  // Show conn status in console
  console.log("Connection with id=ergebnis: False");
}
