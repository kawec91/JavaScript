//Array
const myList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myNewList = [];
//Function
function pruefeUndVerdopple(list) {
  for (i of list) {
    console.log(`Start Value: ${i}`);
    console.log(`End Value x2:` + multiplizieren(i));
    myNewList.push(multiplizieren(i));
    //Conn
    const conWithErgebnis = document.getElementById("ergebnis");
    if (conWithErgebnis) {
      conWithErgebnis.innerHTML += `<p>End Value x2:${multiplizieren(i)}</p>`;
    }
  }
}

function multiplizieren(wert) {
  return wert * 2;
}

pruefeUndVerdopple(myList);
console.log(`My old list: ${myList}`);
console.log(`My new list: ${myNewList}`);
