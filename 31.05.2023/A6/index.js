//Connections
const conWithResultat = document.getElementById("resultat");
//Function
function hallo() {
  return "Hallo";
}

function welt() {
  return "Welt";
}

function meinText(text = "") {
  return `${hallo()} ${welt()} ${text}`;
}
//HTML
conWithResultat.innerHTML =
  // "<p>" + meinText("15:00 Lukasz: Ich bin bereit?") + "</p>";
  `<p>${meinText("15:00 Lukasz: Ich bin bereit?")}</p>`;
