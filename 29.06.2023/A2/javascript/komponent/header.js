import { createImage } from "../function/createImage.js";
import { createOl } from "../function/createOl.js";

const menu = ["Startseite", "Preisliste", "Kontakt"];

export function createHeader(className, imgSrc) {
  return `
  <header class="${className}">
    ${createImage(imgSrc)}
    ${createOl(menu)}
  </header>`;
}
