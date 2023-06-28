//Liste
const meineReise = [];
//Function
function showInAuflisten(ziel, land) {
  //Verbindung
  const connWithAuflisten = document.getElementById("auflisten");
  connWithAuflisten.innerHTML += `<p class="text-design">${ziel} liegt in ${land}<p>`;
}
function showInFilter(meineReise) {
  //Verbindung
  const connWithFilter = document.getElementById("filter");
  connWithFilter.innerHTML = beschreibungListe(checkOrt(meineReise));
}
function checkOrt(reiseListe) {
  //New Liste
  let zielOrte = [];
  let status = false;

  for (let i = 0; i < reiseListe.length; i++) {
    status = false;
    for (let x = 0; x < zielOrte.length; x++) {
      if (zielOrte.length > 0) {
        if (zielOrte[x] === reiseListe[i].land) {
          console.log("status true");
          status = true;
          break;
        }
      }
    }
    if (status === false) {
      zielOrte.push(reiseListe[i].land);
    }
  }
  return zielOrte;
}
function beschreibungListe(liste) {
  let result = ``;
  for (let i = 0; i < liste.length; i++) {
    result += beschreibungTitel(liste[i]);
    for (let x = 0; x < meineReise.length; x++) {
      if (liste[i] === meineReise[x].land) {
        result += beschreibungDetails(meineReise[x].ziel);
      }
    }
  }
  return result;
}
function beschreibungTitel(wert) {
  return `<dt class="descriptionTitel">${wert}</dt>`;
}
function beschreibungDetails(wert) {
  return `<dd class="descriptionDetails">${wert}</dd>`;
}
function speichern() {
  //Verbindung
  const connWithLand = document.getElementById("land");
  const connWithZiel = document.getElementById("ziel");
  //Addieren zu liste
  meineReise.push({ land: connWithLand.value, ziel: connWithZiel.value });
  //Aufrufen
  showInAuflisten(connWithZiel.value, connWithLand.value);
  showInFilter(meineReise);
  //Werte aus feld loschen
  connWithLand.value = "Polen";
  connWithZiel.value = "";
}
