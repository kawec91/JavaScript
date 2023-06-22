//Array
const familien = [
  {
    vorname: "Lukasz",
    nachname: "Lukawczyk",
    alter: "32",
    kinder: ["Julia"],
    ehepartner: { name: "Ada", geschlecht: 2 },
    stadt: "Wuppertal",
    plz: 42275,
    adresse: "Beispiel Strasse 125",
    land: "Deutschland",
  },
  {
    vorname: "Ada",
    nachname: "Lukawczyk",
    alter: "27",
    kinder: ["Julia"],
    ehepartner: { name: "Lukasz", geschlecht: 1 },
    stadt: "Wuppertal",
    plz: 42275,
    adresse: "Beispiel Strasse 125",
    land: "Deutschland",
  },
  {
    vorname: "Patrick",
    nachname: "Lukawczyk",
    alter: "31",
    kinder: ["Marie", "Leon"],
    ehepartner: { name: "Natascha", geschlecht: 2 },
    stadt: "Velbert",
    plz: 42275,
    adresse: "Beispiel2 Strasse 125",
    land: "Deutschland",
  },
  {
    vorname: "Yvonne",
    nachname: "Fischer",
    alter: "51",
    kinder: ["Lukasz", "Patrcik", "Maja"],
    ehepartner: { name: "Andre", geschlecht: 1 },
    stadt: "Wuppertal",
    plz: 42275,
    adresse: "MyBeispiel Strasse 125",
    land: "Deutschland",
  },
];
//Verbindung mit HTML-Element wo ID nennt sich familienListe
const verbindung = document.getElementById("familienListe");

//Functionen
//Geschlecht Kontrolle
function ehegeschlecht(ehepartner) {
  let geschlecht = ehepartner.geschlecht;
  if (geschlecht === 1) {
    return "Herr";
  } else if (geschlecht === 2) {
    return "Frau";
  }
}
//Adress datei in eine satzt kombinieren
function liefereAdresse(stadt, plz, adresse, land) {
  return `wohnt in ${adresse}, ${plz} ${stadt}, ${land}`;
}
//Person datei in eine satzt kombinieren
function lieferePersonDaten(
  vorname,
  nachname,
  alter,
  stadt,
  plz,
  adresse,
  land
) {
  return `<p>${vorname} ${nachname} ist ${alter} Jahre alt und ${liefereAdresse(
    stadt,
    plz,
    adresse,
    land
  )}</p>`;
}
//fur name bauen wir ein li-element
function hilfeLiefereKinder(kindName) {
  return `<li>${kindName}</li>`;
}
//Fur jeden liste element, rufen wir eine funktion und speichern wir das unter variable
function liefereKinder(kinder) {
  let meinekinder = "";
  for (let x = 0; x < kinder.length; x++) {
    meinekinder += hilfeLiefereKinder(kinder[x]);
  }
  return meinekinder;
}
//Fur gegebene object bauen wir eine HTML-Struktur
function ausgabeErzeugen({
  vorname,
  nachname,
  alter,
  kinder,
  ehepartner,
  stadt,
  plz,
  adresse,
  land,
}) {
  return `
  <div class="standard-div">
    <div class="main-text">
        ${lieferePersonDaten(
          vorname,
          nachname,
          alter,
          ehepartner,
          stadt,
          plz,
          adresse,
          land
        )}
    </div>
    <div>
        <p class="ehe">EHEPARTNER/IN ${ehegeschlecht(ehepartner)} ${
    ehepartner.name
  }</p>
    </div>
    <div>
        <p class="ul-liste-title">Die Kinder heißen:</p>
            <ul>
                ${liefereKinder(kinder)} 
            </ul>
    </div>
  </div>
    `;
}

//Fur jeden list element addieren wir gleiche html struktur unter unsere verbindung
for (let i = 0; i < familien.length; i++) {
  verbindung.innerHTML += ausgabeErzeugen(familien[i]);
}
