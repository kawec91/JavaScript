import { createLi } from "../function/createLi.js";

export function createOl(liste) {
  return `<ol>${createLi(liste)}</ol>`;
}
