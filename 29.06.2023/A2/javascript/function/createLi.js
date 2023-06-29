export function createLi(liste) {
  let result = "";
  for (let i = 0; i < liste.length; i++) {
    result += `<li>${liste[i]}</li>`;
  }
  return result;
}
