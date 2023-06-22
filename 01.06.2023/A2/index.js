//Array
const myList = [
  -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];
const positiveZahlen = [];
//Function
function PositiveZahlen(liste) {
  //conn
  const connWithErgebnis = document.getElementById("ergebnis");
  connWithErgebnis.innerHTML += `<p>Start List: ${myList}</p>`;
  for (x of liste) {
    if (x > 0) {
      positiveZahlen.push(x);
      connWithErgebnis.innerHTML += `<p>New list item added: ${x}</p>`;
    }
  }
  console.log(positiveZahlen);
  connWithErgebnis.innerHTML += `<p>Full List: ${positiveZahlen}</p>`;
}

PositiveZahlen(myList);
