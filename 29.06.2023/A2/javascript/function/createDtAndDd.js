export function createDtAndDd(liste) {
  let result = ``;
  for (let i = 0; i < liste.dlTitel.length; i++) {
    result += `<dt>${liste.dlTitel[i]}</dt>`;
    for (let x = 0; x < liste.dlDescription.length; x++) {
      if (liste.dlDescription[x].titel === liste.dlTitel[i]) {
        result += `<dd>${liste.dlDescription[x].description}</dd>`;
      }
    }
  }
  return result;
}
