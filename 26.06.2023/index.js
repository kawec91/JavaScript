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
    <div>
        <div>Produkt</div>
        <div>Menge</div>
        <div>Preis</div>
    </div>
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

  connWithPrice.innerHTML += `
  Normalpreis-Brutto: <br>
  Rabatt: <br>
  Rabatpreis-Brutto: ${newPriceFormat(rabatPreisBrutto)}<br>
  Netto: <br>
  MwSt: <br>
  `;
}
//change price . to , and show only 2 sign after
function newPriceFormat(price) {
  let newPrice = price.toString();
  newPrice = newPrice.split("");
  //Find . and replace wit ,
  newPrice.splice(newPrice.indexOf("."), 1, ",");
  let newPriceNumber = ``;
  for (let i = 0; i < newPrice.length; i++) {
    newPriceNumber += newPrice[i];
  }
  return newPriceNumber + ` &euro;`;
}
//Add item to list
function addItem() {
  //Verbindung
  const connProduct = document.getElementById("product");
  const connMenge = document.getElementById("menge");
  const connPreis = document.getElementById("preis");
  //AddToList
  einkaufsliste.push({
    p: connProduct.value,
    m: parseFloat(connMenge.value),
    k: parseFloat(connPreis.value),
  });
  //AddToHTML
  //Clear Field
  connProduct.value = "";
  connMenge.value = "";
  connPreis.value = "";
}
//Calls
showOrder(einkaufsliste);
endPrice(einkaufsliste);
