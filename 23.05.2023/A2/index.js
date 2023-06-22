// Liste

//Empty List
const liste = [];

//Change listItem[position]
liste[10] = "Köln";
//Change listItem[position]
liste[7] = true;
//Change listItem[position]
liste[0] = "Apfel";
//Change listItem[position]
liste[3] = { a: 12, b: 30, c: -9 };
//Change listItem[position]
liste[8] = 5 * 3.25;
//Change listItem[position]
liste[2] = "Trick 17,5";
//Change listItem[position]
liste[5] = "Hallo" + "Leute";
//Change listItem[position]
liste[9] = false;
//Change listItem[position]
liste[4] = [8, 88, 888, -88, -8];
//Change listItem[position]
liste[6] = {};
//Change listItem[position]
liste[1] = "Die Welt ist rund";

//Print
console.log(liste);
//Print
console.log(liste[0]);
//Print
console.log(liste[4]);
//Print
console.log(liste[8]);
//Print
console.log(liste[2]);

//JSON-Object
const myObject = {
  stadt: "Köln",
  status: true,
  frucht: "Apfel",
  blabla: { a: 12, b: 30, c: -9 },
  multi: 5 * 3.25,
  derScheinTruegt: "Trick 17,5",
  kombi: "Hallo " + "Leute",
  alternative: false,
  alleGutenDingeSind8: [8, 88, 888, -88, -8],
  leer: {},
  tatsache: "Die Welt ist rund",
};

//Print
console.log(myObject);
//Print
console.log(myObject.kombi);
//Print
console.log(myObject.tatsache);
//Print
console.log(myObject.frucht);
//Print
console.log(myObject.blabla);
