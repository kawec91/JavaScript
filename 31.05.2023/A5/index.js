//Connection
const conWithErgebnis = document.getElementById("ergebnis");

//Function
function kalkulieren(wert1, wert2, wert3, wert4, wert5) {
  if (wert1 > 0) return wert2 * wert3 - wert4 + wert5;
  if (wert1 < 0) return (wert2 - wert3 + wert4) / wert5;
  if (wert1 === 0) return 0;
}

conWithErgebnis.innerHTML +=
  "<p>wert2 = 5<br />wert3 = 7 <br />wert4 = 3 <br />wert5 = 10 </p>";
conWithErgebnis.innerHTML +=
  "<p>((wert2 * wert3) – wert4) + wert5 :" +
  kalkulieren(1, 5, 7, 3, 10) +
  "</p>";
conWithErgebnis.innerHTML +=
  "<p>((wert2 - wert3) + wert4) / wert5 :" +
  kalkulieren(-1, 5, 7, 3, 10) +
  "</p>";
conWithErgebnis.innerHTML += "<p>0:" + kalkulieren(0, 5, 7, 3, 10) + "</p>";

///////////////////////////////////////////////////
conWithErgebnis.innerHTML += `////////////////////BESSERE CODE?///////////////////////////`;
//////////////////////////////////////////////////
function kalkulieren2(wert1, wert2, wert3, wert4, wert5) {
  if (wert1 > 0)
    return addieren(subtrahieren(multiplizieren(wert2, wert3), wert4), wert5);
  if (wert1 < 0)
    return dividieren(addieren(subtrahieren(wert2, wert3), wert4), wert5);
  if (wert1 === 0) return 0;
}

//Addieren
function addieren(a, b) {
  return a + b;
}
//Multiplizieren
function multiplizieren(a, b) {
  return a * b;
}
//Subtrahieren
function subtrahieren(a, b) {
  return a - b;
}
//Dividieren
function dividieren(a, b) {
  return a / b;
}

conWithErgebnis.innerHTML += `<p>((a * b) - c) + d = 
${kalkulieren2(1, 5, 7, 3, 10)}
</p>`;
conWithErgebnis.innerHTML += `<p>((a - b) + c) / d = 
${kalkulieren2(-1, 5, 7, 3, 10)}
</p>`;

conWithErgebnis.innerHTML += `<p>(Wert1 ist 0) = 
${kalkulieren2(0, 5, 7, 3, 10)}
</p>`;
