//Arrays
const ulArray = [
  {
    vorname: "Max1",
    nachname: "Mustermann1",
  },
  {
    vorname: "Max2",
    nachname: "Mustermann2",
  },
  {
    vorname: "Max3",
    nachname: "Mustermann3",
  },
  {
    vorname: "Max4",
    nachname: "Mustermann4",
  },
  {
    vorname: "Max5",
    nachname: "Mustermann5",
  },
];
const olArray = ["Birne", "Mango", "Apfel", "Banane"];
const dlJson = {
  titel: "X",
  daten: ["a", "b", "c", "d", "e", "f"],
};
const dlJson2 = {
  titel: "Y",
  daten: [
    {
      produkt: "Produkt1",
      preis: 9.99,
    },
    {
      produkt: "Produkt2",
      preis: 19.99,
    },
    {
      produkt: "Produkt3",
      preis: 199.99,
    },
    {
      produkt: "Produkt4",
      preis: 29.99,
    },
    {
      produkt: "Produkt5",
      preis: 49.99,
    },
  ],
};
function createUl(liste) {
  let result = `<ul>`;
  for (let i = 0; i < liste.length; i++) {
    result += `<li>${liste[i].vorname} ${liste[i].nachname}</li>`;
  }
  result += `</ul>`;
  return result;
}
function createOl(liste) {
  let result = `<ol>`;
  for (let i = 0; i < liste.length; i++) {
    result += `<li>${liste[i]}</li>`;
  }
  result += `</ol>`;
  return result;
}
function createDL(obiect1, obiect2) {
  let result = `<dl>`;
  //Object1
  result += `<dt>${obiect1.titel}</dt>`;
  for (let i = 0; i < obiect1.daten.length; i++) {
    result += `<dd>${obiect1.daten[i]}</dd>`;
  }
  //Obiect2
  result += `<dt>${obiect2.titel}</dt>`;
  for (let x = 0; x < obiect2.daten.length; x++) {
    result += `<dd>${obiect2.daten[x].produkt} ${obiect2.daten[x].preis}</dd>`;
  }
  result += `</dl>`;
  return result;
}
function myApp() {
  //Connection
  const connWithBody = document.getElementById("body");
  connWithBody.innerHTML = `
        ${createUl(ulArray)}
        ${createOl(olArray)}
        ${createDL(dlJson, dlJson2)}
  `;
}
myApp();
