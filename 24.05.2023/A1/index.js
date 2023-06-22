/////////////////////////A1
console.log("Aufgabe 1");

//Konst Array
const liste1 = ["lorem ipsum text", 55, 32.5, true, false];

//Log
console.log(liste1);

/////////////////////////A2
console.log("Aufgabe 2");

//Var Array
let list2 = [
  //Eintrag 1
  [
    //Eintrag 1
    "Essen",
    //Eintrag 2
    "Trinken",
    //Eintrag 3
    "Naschen",
  ],
  //Eintrag 2
  [
    //Eintrag 1
    "SmartTV",
    //Eintrag 2
    399,
    //Eintrag 3
    "Schwarz",
  ],
  //Eintrag 3
  {
    //key : wert
    produkt: "Waschmaschine",
    //key : wert
    marke: "Bosch",
    //key : wert
    preis: 699.54,
    //key : wert
    farbe: "Weiss",
  },
];

//Log
console.log(list2);

/////////////////////////A3
console.log("Aufgabe 3");

//My Object
const object1 = {
  //key : wert
  text: "lorem ipsum",
  //key : wert
  ganzzahl: 5,
  //key : wert
  kommazahl: 3.5,
  //key : wert
  bool1: true,
  //key : wert
  bool0: false,
};

//Log
console.log("bool0: " + object1.bool0);
console.log("bool1: " + object1.bool1);
console.log("kommazahl: " + object1.kommazahl);
console.log("ganzzahl: " + object1.ganzzahl);
console.log("text: " + object1.text);

/////////////////////////A4
console.log("Aufgabe 4");

let object2 = {
  //Eintrag 1
  eint1: [
    "Druck",
    "Dichte",
    "Hitzegrad",
    "Schwellenwert",
    "Höhe",
    "Widerstand",
    "Aufprallschutz",
    "Fallschirm",
    "Qualität",
  ],
  //Eintrag 2
  eint2: ["LenvoUltra Book", 549.65, "Silver-Weiß"],
  //Eintrag 3
  eint3: {
    produkt: "fahrad",
    marke: "mountain",
    preis: 399,
    farbe: "Blue",
  },
};

//Log
console.log(object2);

/////////////////////////A5
console.log("Aufgabe 5");

for (let itemListe1 = 0; itemListe1 < liste1.length; itemListe1++) {
  let index = 0 + itemListe1;
  console.log("Der nächste Eintrag " + index + " ist " + liste1[itemListe1]);
}

/////////////////////////A6
console.log("Aufgabe 6");

for (let itemList2 = 0; itemList2 < list2.length; itemList2++) {
  let myX = 0 + itemList2;
  console.log("And the next value on level X is " + myX);
}

/////////////////////////A6
console.log("Aufgabe 7");

//Array3
let list3 = [liste1, list2, object1, object2];

console.log("From First to Last");
//From First to Last
for (let itemList3 = 0; itemList3 < list3.length; itemList3++) {
  console.log(list3[itemList3]);
}
console.log("From Last to First");
//From Last to First
for (let itemList3 = list3.length - 1; itemList3 > -1; itemList3--) {
  console.log(list3[itemList3]);
}
