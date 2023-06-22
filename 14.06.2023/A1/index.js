//<div></div>

//Verbindung
const ver = document.getElementById("inhalt");
//Bausteinfunktionen
//Create DIV with H3 and HR
function createTitel(titel) {
  return `
    <div>
        <h3>${titel}</h3>
        <hr />
    </div>
    `;
}
//Create DIV with TEXT: SELECT, for all items on list create OPTION with value
function createSelect(label, id, liste) {
  let samm = "";
  for (let x = 0; x < liste.length; x++) {
    samm += `<option value="${x + 1}">${liste[x]}</option>`;
  }
  return `
  <div>
    ${label}: <select size="1" id="${id}">${samm}</select>
  </div>
    `;
}
//Create DIV with TEXT: INPUT
function createInput(label, type, id) {
  return `
  <div>
    ${label}: <input type="${type}" id="${id}">
  </div>
  `;
}
//Create DIV with UL and for all items of list create LI
function createListe(liste) {
  let samm = "";
  for (let x = 0; x < liste.length; x++) {
    samm += `<li>${liste[x]}</li>`;
  }
  return `
    <div>
        <ul>
            ${samm}
        </ul>
    </div>
    `;
}
//Create TABLE with Headers and for all items of list create TR and TD's
function createTabele(daten) {
  let samm = "";
  for (let x = 0; x < daten.length; x++) {
    samm += `
    <tr>
        <td>${daten[x].product}</td>
        <td>${daten[x].menge}</td>
        <td>${daten[x].preis}</td>
    </tr>
    `;
  }
  return `
    <table>
        <tr>
            <th>Produkt
            </th>
            <th>Menge
            </th>
            <th>Preis
            </th>
        </tr>
        ${samm}
    </table>
    `;
}

//Komponentfunktionen
//Call more functions and show result in HTML
function titleAndShippingArea(
  titel,
  selectLabel,
  selectId,
  selectListe,
  inputLabel,
  inputType,
  inputId
) {
  ver.innerHTML += `
  ${createTitel(titel)}
  ${createSelect(selectLabel, selectId, selectListe)}
  ${createInput(inputLabel, inputType, inputId)}
  `;
}
//Create DIV, Call more functions and show result in HTML
function listeArea(liste1, liste2) {
  ver.innerHTML += `
    <div style="display: flex;">
        ${createListe(liste1)}
        ${createListe(liste2)}
    </div>
    `;
}
//Call more functions and show result in HTML
function tableArea(daten, id, details, myFunc) {
  ver.innerHTML += `
  <h4>${details}</h4>
    <div id="${id}">
        ${createTabele(daten)}
    </div>
    <hr />
    <div>
        <button onclick="${myFunc}">Jetzt bestellen</button>
    </div>
    `;
}

//Get formular value, show it in console, Send Vielen Dank alert, clear formular
function sendBestellung(versandId, adressId, tableId) {
  let versand = document.getElementById(versandId);
  let adress = document.getElementById(adressId);
  let table = document.getElementById(tableId);
  console.log(`versand option: ${versand.value}, adresse: ${adress.value}`);
  alert("Ihre Bestellung wurde entgegen genommen, Vielen Dank!");
  versand.value = 1;
  adress.value = "";
  table.innerHTML = createTabele([
    {
      product: "",
      menge: "",
      preis: "",
    },
  ]);
}

//Call Functions
titleAndShippingArea(
  "Warenkorb",
  "Versandoption",
  1,
  ["Normal", "Express", "Abholung"],
  "Deine Adresse",
  "text",
  2
);
listeArea(
  ["Neu", "Schnelle Lieferung", "24h Service"],
  ["VISA", "Sofortüberweisung", "PayPal"]
);
tableArea(
  [
    {
      product: "Product 1",
      menge: 24,
      preis: "24,99 €",
    },
    {
      product: "Product 2",
      menge: 14,
      preis: "99,99 €",
    },
    {
      product: "Product 3",
      menge: 4,
      preis: "84,99 €",
    },
    {
      product: "Product 4",
      menge: 54,
      preis: "14,99 €",
    },
    {
      product: "Product 5",
      menge: 74,
      preis: "4,99 €",
    },
  ],
  3,
  "Produkt Liste",
  "sendBestellung(1,2,3)"
);
