//Connection
const conn = document.getElementById("inhalt");

//Obiekt
const myObiekt = {
  titel: "Mathe",
  liste: [
    { num1: 1, num2: 5, operation: "+" },
    { num1: 1, num2: 5, operation: "-" },
    { num1: 1, num2: 5, operation: "*" },
    { num1: 1, num2: 5, operation: "/" },
    { num1: 1, num2: 0, operation: "/" },
  ],
};

//Functionen
function rechnen(z1, z2, rw) {
  let ergebnis = 0;
  if (rw === "+") {
    ergebnis = parseFloat(z1) + parseFloat(z2);
  }
  if (rw === "-") {
    ergebnis = parseFloat(z1) - parseFloat(z2);
  }
  if (rw === "*") {
    ergebnis = parseFloat(z1) * parseFloat(z2);
  }
  if (rw === "/" && parseFloat(z1) !== 0 && parseFloat(z2) !== 0) {
    ergebnis = parseFloat(z1) / parseFloat(z2);
  }
  return `<p>${parseFloat(z1)} ${rw} ${parseFloat(z2)} = ${ergebnis}</p>`;
}

function test(liste) {
  let sammelnvariable = "";
  for (let i = 0; i < liste.length; i++) {
    sammelnvariable += rechnen(
      liste[i].num1,
      liste[i].num2,
      liste[i].operation
    );
  }
  return sammelnvariable;
}

function ausgabe(quelle) {
  conn.innerHTML = `
        <h3>${quelle.titel}</h3>
        ${test(quelle.liste)}
    `;
}
ausgabe(myObiekt);
