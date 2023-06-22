//Connections
const connWithInhalt = document.getElementById("inhalt");

//Functions
// function farbe(nummer) {
//   if (nummer == 0) {
//     return "black";
//   } else if (nummer == 1) {
//     return "white";
//   } else if (nummer == 2) {
//     return "gray";
//   } else if (nummer == 3) {
//     return "blue";
//   } else if (nummer == 4) {
//     return "green";
//   } else if (nummer == 5) {
//     return "red";
//   } else if (nummer == 6) {
//     return "pink ";
//   } else if (nummer == 7) {
//     return "silver";
//   } else if (nummer == 8) {
//     return "darkblue";
//   } else if (nummer == 9) {
//     return "navy";
//   } else if (nummer == 10) {
//     return "skyblue";
//   } else if (nummer == 11) {
//     return "yellow";
//   }
// }
function farbe(nummer) {
  if (nummer == 0) return "black";
  if (nummer == 1) return "white";
  if (nummer == 2) return "gray";
  if (nummer == 3) return "blue";
  if (nummer == 4) return "green";
  if (nummer == 5) return "red";
  if (nummer == 6) return "pink ";
  if (nummer == 7) return "silver";
  if (nummer == 8) return "darkblue";
  if (nummer == 9) return "navy";
  if (nummer == 10) return "skyblue";
  if (nummer == 11) return "yellow";
  return "farbe: Wrong Color Value";
}

function mixen(wert, farbnummer) {
  if (connWithInhalt) {
    connWithInhalt.innerHTML += `<div style="background-color:
      ${farbe(farbnummer)}";>${wert}</div>`;
  }
  return console.log("something is wrong with conn");
}

mixen("Der Himmel ist", 10);
mixen("Das Meer ist", 3);
mixen("Der Wald ist voller Grün", 4);
