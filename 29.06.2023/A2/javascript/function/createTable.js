import { createTableTh } from "../function/createTableTh.js";
import { createTableTr } from "./createTableTr.js";

export function createTable(thList, trList) {
  return `
    <table>
        ${createTableTh(thList)}
        ${createTableTr(trList)}
    </table>
    `;
}
