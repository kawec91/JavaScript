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
    <div class="korbHeader">
        <div>Produkt</div>
        <div>Menge</div>
        <div>Preis</div>
    </div>
    <div id="orderList" >
    `;
  for (let i = 0; i < liste.length; i++) {
    result += `
        <div class="orderList">
            <div>${liste[i].p}</div>
            <div>${liste[i].m}</div>
            <div>${newPriceFormat(liste[i].k.toFixed(2))}</div>
        </div>
    `;
  }
  result += `</div>`;
  connWithWk.innerHTML += result;
  endPrice(einkaufsliste);
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

  connWithPrice.innerHTML = `
  Normalpreis-Brutto: ${newPriceFormat(standardPreisBrutto.toFixed(2))}<br>
  Rabatt (15%): ${newPriceFormat(rabat.toFixed(2))}<br>
  Rabatpreis-Brutto: ${newPriceFormat(rabatPreisBrutto.toFixed(2))}<br>
  Netto: ${newPriceFormat(nettoPreis.toFixed(2))}<br>
  MwSt: ${newPriceFormat(mwst.toFixed(2))}<br>
  `;
}
//change price . to , and show result as float number length 2
function newPriceFormat(price) {
  //number to string
  let newPrice = price.toString();
  //string to list
  newPrice = newPrice.split("");
  //Find . and replace wit ,
  if (newPrice.indexOf(".") !== -1) {
    newPrice.splice(newPrice.indexOf("."), 1, ",");
  }
  //new variable
  let newPriceNumber = ``;
  //from list to one string
  for (let i = 0; i < newPrice.length; i++) {
    newPriceNumber += newPrice[i];
  }
  //string + euro ang give it back
  return newPriceNumber + ` &euro;`;
}
//Add item to list
function addItem() {
  //Connections
  const connProduct = document.getElementById("product");
  const connMenge = document.getElementById("menge");
  const connPreis = document.getElementById("preis");
  const connOrderList = document.getElementById("orderList");
  //AddToList
  einkaufsliste.push({
    p: connProduct.value,
    m: parseFloat(connMenge.value),
    k: checkRightInputNumberFormat(connPreis.value),
  });
  //AddToHTML
  connOrderList.innerHTML += `
        <div class="orderList">
            <div>${connProduct.value}</div>
            <div>${parseFloat(connMenge.value)}</div>
            <div>${parseFloat(connPreis.value)}</div>
        </div>
        `;
  //Clear Field
  connProduct.value = "";
  connMenge.value = "";
  connPreis.value = "";
  connWithWk.innerHTML = "";
  //Call function
  showOrder(einkaufsliste);
}
//Show message in Alert clear html and list
function confirmOrder() {
  //message
  alert("Thank for your order.");
  //clear html list
  connWithWk.innerHTML = "";
  //clear html price
  connWithPrice.innerHTML = "";
}
//Change , to . in number
function checkRightInputNumberFormat(number) {
  //from number to list of strings
  let checkNumber = number.toString().split("");
  //when , exist
  if (checkNumber.indexOf(",") !== -1) {
    //replace , with .
    checkNumber.splice(checkNumber.indexOf(","), 1, ".");
  }
  //new variable
  let rightFormat = "";
  //from list to one string
  for (let i = 0; i < checkNumber.length; i++) {
    rightFormat += checkNumber[i];
  }
  //convert string to number and give it back
  return parseFloat(rightFormat);
}
//Calls
showOrder(einkaufsliste);
