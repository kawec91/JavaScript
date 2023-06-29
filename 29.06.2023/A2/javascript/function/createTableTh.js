export function createTableTh(liste) {
  let result = `<tr>`;
  for (let i = 0; i < liste.length; i++) {
    result += `<th>${liste[i]}</th>`;
  }
  result += `</tr>`;
  return result;
}
