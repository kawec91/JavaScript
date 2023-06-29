import { createDtAndDd } from "./createDtAndDd.js";

export function createDl(object) {
  return `<dl>${createDtAndDd(object)}</dl>`;
}
