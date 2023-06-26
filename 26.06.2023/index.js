// Daten //
let einkaufsliste = [
  {
    p: "Hemd", // Produktname
    m: 3, // Menge
    k: 9.99, // Kosten (Preis)
  },
  {
    p: "Hose",
    m: 2,
    k: 25.6,
  },
  {
    p: "Socken",
    m: 8,
    k: 2.5,
  },
  {
    p: "Cappy",
    m: 1,
    k: 19.0,
  },
];
//Connections
const connWithWk = document.getElementById("wk");
const connWithPrice = document.getElementById("price");
//Functions
//Show our order
function showOrder(liste) {
  result = `
    <table>
        <tr>
            <td>Produkt</td>
            <td>Menge</td>
            <td>Preis</td>
        </tr>
    
    `;
  for (let i = 0; i < liste.length; i++) {
    result += `
        <tr>
            <td>${liste[i].p}</td>
            <td>${liste[i].m}</td>
            <td>${liste[i].k}</td>
        </tr>
    `;
  }
  result += `</table>`;
  connWithWk.innerHTML += result;
}

//Calculate and Show End Price
function endPrice() {}

//Calls
showOrder(einkaufsliste);
