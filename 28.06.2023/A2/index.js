//Array
const productListe = [];
//function
function add() {
  //Connection
  const conWithProdukt = document.getElementById("produkt");
  const conWithZustand = document.getElementById("zustand");
  const conWithDL = document.getElementById("beschreibungTeil");
  //Conn With HTML
  conWithDL.innerHTML = createDtAndDd(
    checkZustand(addToProductList(conWithProdukt.value, conWithZustand.value))
  );
  //Clear field
  conWithProdukt.value = "";
  conWithZustand.value = "Neu";
}
//Add product to main list
function addToProductList(produkt, zustand) {
  productListe.push({ productName: produkt, productZustand: zustand });
  return productListe;
}
//check unique zustand
function checkZustand(liste) {
  let zustandList = [];
  let status = false;
  console.log(zustandList);
  for (let i = 0; i < liste.length; i++) {
    status = false;
    if (zustandList.length > 0) {
      for (let x = 0; x < zustandList.length; x++) {
        if (liste[i].productZustand === zustandList[x]) {
          status = true;
          console.log("status true");
          break;
        }
      }
    }
    if (status === false) {
      zustandList.push(liste[i].productZustand);
    }
  }
  return zustandList;
}
//create titel ass unique zustand and add to description product name
function createDtAndDd(liste) {
  let result = ``;
  for (let i = 0; i < liste.length; i++) {
    result += `<dt>${liste[i]}</dt>`;
    for (let x = 0; x < productListe.length; x++) {
      if (liste[i] === productListe[x].productZustand) {
        result += `<dd>${productListe[x].productName}`;
      }
    }
  }
  return result;
}

//create DT
function descriptionListTitel(titel) {
  return `<dt>${titel}</dt>`;
}
//create DL
function descriptionListDetails(details) {
  return `<dd>${details}</dd>`;
}
