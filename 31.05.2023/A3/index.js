//Array
const staedteDerWelt = [
  "Wuppertal",
  "Monachium",
  "Berlin",
  "Hamburg",
  "Hannover",
];

//Connections
const connWithAbc = document.getElementById("abc");

//Functions
function reiseZiele(beschreibung, liste) {
  for (x of liste) {
    connWithAbc.innerHTML += `<p>${beschreibung}: ${x}</p>`;
  }
}

reiseZiele("Die nächste Stadt heißt", staedteDerWelt);
