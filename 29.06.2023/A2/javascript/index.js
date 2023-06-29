import { createHeader } from "./komponent/header.js";
import { createMain } from "./komponent/main.js";
import { createFooter } from "./komponent/footer.js";

function myApp() {
  //Verbindung
  const connWithBody = document.getElementById("body");
  connWithBody.innerHTML = `
  ${createHeader(
    "header-style",
    "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-256.png"
  )}
  ${createMain()}
  ${createFooter()}
  `;
}
myApp();
