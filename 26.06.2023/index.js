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
function endPrice(liste) {
  let standardPreisBrutto = 0,
    rabat = 0,
    rabatPreisBrutto = 0,
    nettoPreis = 0,
    mwst = 0;

  for (let i = 0; i < liste.length; i++) {
    standardPreisBrutto += liste[i].m * liste[i].k;
  }

  rabat = standardPreisBrutto * 0.19;
  rabatPreisBrutto = standardPreisBrutto - rabat;
  mwst = rabatPreisBrutto * 0.19;
  nettoPreis = rabatPreisBrutto - mwst;
  console.log(standardPreisBrutto, rabat, rabatPreisBrutto, mwst, nettoPreis);

  connWithPrice.innerHTML += `
  Normalpreis-Brutto: <br>
  Rabatt: <br>
  Rabatpreis-Brutto: <br>
  Netto: <br>
  MwSt: <br>
  `;
}

//Calls
showOrder(einkaufsliste);
endPrice(einkaufsliste);
