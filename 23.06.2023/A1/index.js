//Array/Object
const myObject = {
  titel: "MyTitel",
  liste: [{ h3: "NextTitel", p: "simple text in p element", h4: "LastTitel" }],
};
//Connection
const conn = document.getElementById("inhalt");
//Function
function abc(x, y, z) {
  return `
    <h3>${x}</h3>
    <p>${y}</p>
    <h4>${z}</h4>
    <hr>
    `;
}

function test(b) {
  let result = "";
  for (let i = 0; i < b.length; i++) {
    result += abc(b[i].h3, b[i].p, b[i].h4);
  }
  return result;
}

function ausgabe(z) {
  conn.innerHTML = `
    <h4>${z.titel}</h4>
    ${test(z.liste)}
    `;
}
ausgabe(myObject);
