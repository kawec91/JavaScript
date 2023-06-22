//Functions
function rechnen(z1, z2, rw) {
  if (rw == null) return "Not Enought Parametrs";
  if (rw == "+") return z1 + z2;
  if (rw == "-") return z1 - z2;
  if (rw == "*") return z1 * z2;
  if (rw == "/") return z1 / z2;
}

//Connections
const conWithAusgabe = document.getElementById("ausgabe");

//HTML
if (conWithAusgabe) {
  conWithAusgabe.innerHTML += `<p>${rechnen(3, 9, "+")}</p>`;
  conWithAusgabe.innerHTML += `<p>${rechnen(8, 2, "-")}</p>`;
  conWithAusgabe.innerHTML += `<p>${rechnen(32, 1.5, "*")}</p>`;
  conWithAusgabe.innerHTML += `<p>${rechnen(128, 8, "/")}</p>`;
} else {
  console.log("something went wrong connection with html");
}
