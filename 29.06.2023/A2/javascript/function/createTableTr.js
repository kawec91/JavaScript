export function createTableTr(liste) {
  let result = ``;
  for (let i = 0; i < liste.length; i++) {
    result += `<tr>
                    <td>${liste[i].produkt}</td>
                    <td>${liste[i].menge}</td>
                    <td>${liste[i].preis}</td>
               </tr>`;
  }
  return result;
}
