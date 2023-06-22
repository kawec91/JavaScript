//Connection
const connWithMain = document.getElementById("main");

// Inhalt vorbereiten
const inhalt = [
  // Eintrag 0, Objekt 1
  {
    klasse: "nice-1",
    id: "e-1",
    bild: "https://carwow-de-wp-3.imgix.net/bmw-i7m-final-image-graded-grille-lights-1-1.png?auto=format&cs=tinysrgb&fit=crop&h=800&ixlib=rb-1.1.0&q=60&w=1600",
    text: "BMW i7",
    url: "https://de.wikipedia.org/wiki/BMW_i",
  },
  // Eintrag 1, Objekt 2
  {
    klasse: "nice-2",
    id: "e-2",
    bild: "https://i.auto-bild.de/ir_img/2/9/5/1/8/7/3/3e06ce86bc74886e.jpg?impolicy=leadteaser",
    text: "Golf",
    url: "https://de.wikipedia.org/wiki/VW_Golf",
  },
  // Eintrag 2, Objekt 3
  {
    klasse: "nice-1",
    id: "e-3",
    bild: "https://i.auto-bild.de/ir_img/3/0/6/0/6/3/7/Porsche_911_TKE_01-f78a7f900c8230ce.jpg?impolicy=leadteaser",
    text: "Porsche",
    url: "https://de.wikipedia.org/wiki/Porsche",
  },
  // Eintrag 3, Objekt 4
  {
    klasse: "nice-2",
    id: "e-4",
    bild: "https://imgr1.auto-motor-und-sport.de/TOGG-T10X-Elektro-SUV-article169Gallery-64b92017-1984302.jpg",
    text: "Togg",
    url: "https://de.wikipedia.org/wiki/Togg",
  },
];

//Functions
function createContent(text, url) {
  //create div for text and anchor-element
  return `<div class="contentText">${text}</div><div class="contentUrl"><a href="${url}">READ MORE</a></div>`;
}
function createImage(bild) {
  //Create img-element
  return `<img src="${bild}" alt="">`;
}
function createContentContainer(bild, text, url) {
  //Create div for img object and for content
  return `<div class="img-wrapper">${createImage(
    bild
  )}</div> <div class="content-wrapper">${createContent(text, url)}</div>`;
}

function takeKeysFromObjects({ klasse, id, bild, text, url }) {
  //Create div with classe and id
  return `<div class="${klasse} id="${id}">${createContentContainer(
    bild,
    text,
    url
  )}</div>`;
}

for (let x of inhalt) {
  connWithMain.innerHTML += takeKeysFromObjects(x);
}
