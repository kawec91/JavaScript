// Primitive Variable
let a = 5;
let b = 7.8;
let c = true;
let d = false;
let e = "Hello Welt";

//Primitive Konstante
const vorname = "Lukasz";
const nachname = "Lukawczyk";
const alt = 32;

//Liste Variable
let liste1 = ["apfel", "banane", "kirsche"];
let liste2 = ["tomaten", "gurken", "kartoffeln"];

//Liste Konstante
const liste3 = ["Kattowitz", "Warschaw", "Thorn"];
const liste4 = ["Polen", "Deutschland", "Spanien"];

//log
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log((a * b) / 0.5);
console.log(c + d);
console.log(c);
console.log(d);
console.log(e);
console.log(
  "Mein Name ist " +
    vorname +
    " " +
    nachname +
    " und ich bin " +
    alt +
    " Jahre alt."
);
console.log("Liste 1: ", liste1);
console.log("Liste 2: ", liste2);
console.log("Liste 3: ", liste3);
console.log("Liste 4: ", liste4);

produktList = [];
console.log("Produkt Liste: ", produktList);

///////// Variable /////////////
// MSTW
let mwst = 0.19;
// Price
let consoleNetto = 0;
// Name
let consoleName = "";
///////// EndVariable /////////////

// Operation
let consoleMwst = consoleNetto * mwst;
let consoleBrutto = consoleNetto + consoleMwst;
// EndOperation

//[Optional] PS5
consoleName = "Playstation 5";
consoleNetto = 599;

// Operation
consoleMwst = consoleNetto * mwst;
consoleBrutto = consoleNetto + consoleMwst;
// EndOperation

//StandardLogPrint
console.log("Konsole: " + consoleName);
console.log("Price (Netto): " + consoleNetto + "€");
console.log("mwst(19%): " + consoleMwst + "€");
console.log("Price (Brutto): " + consoleBrutto + "€");
//EndStandardLogPrint

//Add to Produkt List
produktList.push(consoleName);
//Print im Log
console.log("Produkt Liste: ", produktList);

//[Optional] Xbox
consoleName = "Xbox One";
consoleNetto = 499;

// Operation
consoleMwst = consoleNetto * mwst;
consoleBrutto = consoleNetto + consoleMwst;
// EndOperation

//StandardLogPrint
console.log("Konsole: " + consoleName);
console.log("Price (Netto): " + consoleNetto + "€");
console.log("mwst(19%): " + consoleMwst + "€");
console.log("Price (Brutto): " + consoleBrutto + "€");
//EndStandardLogPrint

//Add to Produkt List
produktList.push(consoleName);
//Print im Log
console.log("Produkt Liste: ", produktList);

//For Try
const liste10 = [10, 20, 30];

for (let n of liste10) {
  console.log(n);
  console.log("INDEX ", n);
}

//Mein Beispiel
//PS5 as JSON-Object
ps5 = {
  conName: "Playstation 5",
  conNettoPrice: 599,
};
//XBOX as JSON-OBJECT
xboxOne = {
  conName: "Xbox One",
  conNettoPrice: 499,
};

//Nintendo Switch as JSON-OBJECT
ns = {
  conName: "Nintendo Switch",
  conNettoPrice: 399,
};
//LIST of JSCON-OBJECTS
consoleList = [ps5, xboxOne, ns];

//My own Loop
for (let x of consoleList) {
  //Print name of Json-Object
  console.log("Nazwa: " + x["conName"]);
  //Print netto price of Json-Object
  console.log("Netto Price: " + x["conNettoPrice"]);
  //Count amount steuer
  let steuer = x["conNettoPrice"] * mwst;
  //Print Steuer
  console.log("MWST: " + steuer);
  //Count Brutto price
  let conBruttoPrice = x["conNettoPrice"] + steuer;
  //Print Brutto Price
  console.log("Brutto Price: " + conBruttoPrice);
}

//For Loop
for (let y = 0; y < 6; y++) {
  console.log(y);
}

const stadtListe = {
  a: "Stadt1",
  b: "Stadt2",
  c: "Stadt3",
  d: "Stadt4",
  e: "Stadt5",
  f: "Stadt6",
};

console.log(stadtListe.c);
