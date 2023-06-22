//Connectinon
const connWithMain = document.getElementById("main");
//Array
const myArray = [
  //Object 0
  {
    cssclass: "nice-1",
    titletext: "iPhone",
    bild: [
      "https://i.otto.de/i/otto/85efaad7-47d9-5642-870f-5fd39c057f37/apple-iphone-14-256gb-smartphone-15-4-cm-6-1-zoll-256-gb-speicherplatz-12-mp-kamera-blue.jpg?$formatz$",
      "https://res.cloudinary.com/grover/image/upload/f_webp,q_auto/b_white,c_pad,dpr_2.0,h_500,w_520/f_auto,q_auto/v1668184041/rnfxgwshubrpd30ijvz7.png",
      "https://images.cgames.de/images/gamestar/290/iphone-14-pro_6195521.jpg",
      "https://image.stern.de/32706176/t/Dn/v6/w1440/r1.3333/-/apple-iphone-14-airpods-apple-watch.jpg",
    ],
    text: "iPhone [ˈa͡ɪfo͡ʊn] ist eine im Jahr 2007 mit dem gleichnamigen Smartphone ins Leben gerufene Smartphone-Modellreihe des US-amerikanischen Unternehmens Apple. Bislang wurden insgesamt 33 verschiedene Modelle (G-, S-, SE-, C-, Plus-, S-Plus-, Max-, Pro-, Pro-Max- und Mini-Modelle mitgezählt) vorgestellt, die neuesten Modelle im September 2022 – das iPhone 14, iPhone 14 Plus mit dem iPhone 14 Pro und iPhone 14 Pro Max. Am 21. März 2016 kam in Form der ersten Generation des iPhone SE das letzte 4-Zoll-Modell der Modellreihe hinzu. Am 24",
    id: 0,
  },
  //Object 1
  {
    cssclass: "nice-2",
    titletext: "Autos",
    bild: [
      "https://images.ctfassets.net/x7mjp9itmnlu/9gROrMHJZtW6xIWmxTjf2/cace09dea7741339860c4c763030881b/Neue-Autos-2023-Toyota-Prius-dritte-Generation-PHEV.jpg?fm=jpg&fl=progressive&w=1600",
      "https://www.motorsport-total.com/img/2014/140411/191596_w660_h330.jpg?ts=1397209805",
      "https://i.auto-bild.de/ir_img/6/3/9/9/5/0/Stars-Cars-Die-Autos-der-Promis-1200x800-28d27017c1963663.jpg",
      "https://i0.web.de/image/774/32669774,pd=2,f=sdata169/ps-geld-autos-stimmt-preis-leistungs-verhaeltnis.jpg",
      "https://i.ytimg.com/vi/N06t2ESlyWo/maxresdefault.jpg",
      "https://www.autozeitung.de/assets/field/image/chevrolet-chevelle-ls6-01.jpg",
    ],
    text: "Ein Automobil, kurz Auto (in Deutschland amtlich Kraftfahrzeug, in der Schweiz amtlich Motorwagen), ist ein mehrspuriges motorgetriebenes Straßenfahrzeug zur Beförderung von Personen oder Lasten. Umgangssprachlich nennt man Auto vor allem Fahrzeuge, die zum Transport von Personen bestimmt sind; amtlich werden diese als Personenkraftwagen (kurz: Pkw) bezeichnet, oder – bei mehr Sitzplätzen – als Bus. Soll ein Fahrzeug mehrheitlich Güter transportieren, heißt es amtlich Lastkraftwagen (Lkw).Der weltweite Fahrzeugbestand lag im Jahr 2010 bei über 1,015 Milliarden Automobilen und stieg seitdem kontinuierlich an. 2011 wurden weltweit über 80 Millionen Automobile gebaut. In Deutschland waren im Jahr 2012 etwa 51,7 Millionen Kraftfahrzeuge zugelassen, davon sind knapp 43 Millionen Personenkraftwagen.",
    id: 1,
  },
  //Object 2
  {
    cssclass: "nice-3",
    titletext: "Gucci-Tasche",
    bild: [
      "https://www.preluv.de/journal/wp-content/uploads/2016/08/shutterstock_389762497-850x425.jpg",
      "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1659600047/446744_DTDIT_1000_001_055_0000_Light-Mini-Tasche-GG-Marmont-aus-Matelass.jpg",
      "https://img.ebay-kleinanzeigen.de/api/v1/prod-ads/images/e2/e2a72c14-138b-46af-8046-7015d42b455d?rule=$_59.JPG",
      "https://cms.brnstc.de/product_images/435x596_retina/cpro/media/images/product/23/4/100112373412000_0_1681980367046.jpg",
    ],
    text: "Gucci [ˈɡutʃi] ist ein italienisches Modeunternehmen für Damen-, Herren- und Kinderbekleidung sowie Accessoires im Luxusgütersegment mit weltweiten Einzelhandelsgeschäften.Die Guccio Gucci S.p.A. gehört seit 2004 vollständig zum französischen Luxusgüterkonzern Kering, in dem weitere Luxusmarken gebündelt sind.",
    id: 2,
  },
  //Object 3
  {
    cssclass: "nice-1",
    titletext: "Notebooks",
    bild: [
      "https://www.notebookcheck.com/fileadmin/Notebooks/News/_nc3/Alldocubegtbook13.jpg",
      "https://www.notebookcheck.com/fileadmin/Notebooks/News/_nc3/Zenbook_17_Fold_offiziell_gelauncht.jpg",
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-17-9720/media-gallery/notebook-xps-17-9720-silver-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3484&hei=2054&qlt=100,1&resMode=sharp2&size=3484,2054&chrss=full&imwidth=5000",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJBkbFvbCVeWPRw9DTEPadTfZqOvVWbN85IZsMmx2ry-ptoLruvrFp_chpg-2-I9NU_0Q&usqp=CAU",
    ],
    text: "Ein Notebook [nəʊtbʊk] (englisch notebook Notizbuch) oder Laptop [læpˌtɔp]  Aussprache?/i (vom englischen laptop wörtlich für auf dem Schoß, übertragen Schoßrechner), ist eine spezielle Bauform eines Personal Computers, die zu den Mobilgeräten zählt. Sie besitzt folgende grundlegende EigenschaftenIn einem flachen rechteckigen Gehäuse ist auf der Oberseite eine Tastatur flächenbündig integriert. Diese weist im alphanumerischen Bereich üblicherweise den von der ISO 9241-410:2012-12 für effizientes Tippen geforderten Tastenmittenabstand von 19 mm auf und hat eine Tastaturbelegung gemäß ISO/IEC 9995-2, z. B. QWERTZ für den deutschsprachigen Anwendungsbereich.",
    id: 3,
  },
  //Object 4
  {
    cssclass: "nice-2",
    titletext: "Pizza",
    bild: [
      "https://cdn.aniagotuje.com/pictures/articles/2022/08/31553217-v-1500x1500.jpg",
      "https://www.einfachkochen.de/sites/einfachkochen.de/files/styles/full_width_tablet_4_3/public/2022-06/pizza_regina_2.jpg?h=4521fff0&itok=QxWYAj01",
      "https://www.eatclub.tv/wp-content/uploads/sites/4/2021/09/pommes-pizza-e1631282424469.jpg?w=1200",
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/9f55e916fe241bd543ce98423bbd5e5f/Derivates/6d7e9a44abd487b09c1e58e333d6cff366fb64cd.jpg",
    ],
    text: "Eine Pizza (Aussprache [ˈpɪtsa], ital. [ˈpitːsa], deutscher Plural: die Pizzas oder die Pizzen[1]) ist ein vor dem Backen würzig belegtes Fladenbrot aus einfachem Hefeteig aus der italienischen Küche. Die heutige international verbreitete Variante mit Tomatensauce und Käse als Basis stammt vermutlich aus Neapel. 2017 wurde die neapolitanische Kunst des Pizzabäckers (Art of Neapolitan ‘Pizzaiuolo’) von der UNESCO in die repräsentative Liste des immateriellen Kulturerbes der Menschheit aufgenommen.[2]",
    id: 4,
  },
  //Object 5
  {
    cssclass: "nice-3",
    titletext: "Reise",
    bild: [
      "https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2021/10/Cape-Town-Coast-line_redit_GettyImages-1151735355.jpg",
      "https://www.mexico-mio.de/fileadmin/_processed_/5/f/csm_teotihuacan-box_482dbc1216.jpg",
      "https://www.wwf.de/fileadmin/_processed_/4/c/csm_gepard-w%C3%BCste-namibia-WW188067-c-martin-harvey-wwf_9300b22a2e.jpg",
      "https://imageio.forbes.com/blogs-images/jimdobson/files/2018/07/1-1.jpg?format=jpg&width=1200",
    ],
    text: "Unter einer Reise versteht man im Sinne der Verkehrswirtschaft die Fortbewegung von Personen über einen längeren Zeitraum zu Fuß oder mit Verkehrsmitteln außerhalb des Wirtschaftsverkehrs, um ein einzelnes Ziel (Reiseziel) zu erreichen oder mehrere Orte zu besuchen (Rundreise). Im fremdenverkehrswirtschaftlichen Sinne umfasst eine Reise sowohl die Ortsveränderung selbst als auch den Aufenthalt am Zielort.",
    id: 5,
  },
];

//Functions
function addBildToNewList(bild, id) {
  //Create Dynamic Varriable
  window[`myNewList${id}`] = [];
  //Create Dynamic Variable
  window[`chosenImg${id}`] = 0;
  //Loop
  for (let k = 0; k < bild.length; k++) {
    //Show Item in console
    console.log(`Added Item ${k}: ${bild[k]}`);
    //Add to our DinamicVariable list item
    eval(`myNewList${id}`).push(bild[k]);
  }
  //Show Value of Dynamic Variable in console
  console.log(eval(`myNewList${id}`));
  //Show Value of Dynamic Variable in console
  console.log(eval(`chosenImg${id}`));
  //Show End of Object in cosnole
  console.log(`----End Object---`);
  //Make local dynamic variable to global
  return eval(`myNewList${id}`), eval(`chosenImg${id}`);
}
function changeImage(myListOfImages, id) {
  //conn
  const conn = document.getElementById(`img-box-${id}`);
  //Ovverride items in id img-box
  conn.innerHTML = `<img src="${myListOfImages[eval(`chosenImg${id}`)]}"/>`;
}
//Button Back
function backImage(id) {
  //Add
  eval(`chosenImg${id} = ${eval(`chosenImg${id}`) - 1} `);
  //Show in Console
  console.log("ButtonBackUse: " + eval(`chosenImg${id}`));
  // if
  if (eval(`chosenImg${id}`) < 0) {
    eval(`chosenImg${id} = ${eval(`myNewList${id}`).length - 1}`);
    changeImage(eval(`myNewList${id}`), id);
  }
  console.log(eval(`chosenImg${id}`));
  //Call
  changeImage(eval(`myNewList${id}`), id);
}
//Button Next
function nextImage(id) {
  //Add
  eval(`chosenImg${id} = ${eval(`chosenImg${id}`) + 1} `);
  //Show in Console
  console.log("ButtonNextUse: " + eval(`chosenImg${id}`));
  // if
  if (eval(`chosenImg${id}`) == eval(`myNewList${id}`).length) {
    eval(`chosenImg${id} = 0`);
  }
  console.log(eval(`chosenImg${id}`));

  //Call
  changeImage(eval(`myNewList${id}`), id);
}

function createButtonContainer(id) {
  return `
    <div class="btn-contaier">
        <button class="standard-btn" onclick="backImage(${id})">Vorheriges Bild</button>
        <button class="standard-btn" onclick="nextImage(${id})">Nächstes Bild</button>
    </div>
    `;
}
function createText(text) {
  return `<p>${text}</p>`;
}
function createImg(bild) {
  let myImg = 0;
  return `<img src="${bild[myImg]}" alt="" />`;
}
function createImgContainer(bild, text, id) {
  return `
  <div class="image-container">
    <div class="image-wrapper" id="img-box-${id}">${createImg(bild)}</div>
    <div class="text-container">${createText(text)}</div>
  </div>`;
}
function createTitleText(titletext) {
  return `
  <div class="title-wrapper">
    <h3>${titletext}</h3>
  </div>`;
}
function catchObject({ cssclass, titletext, bild, text, id }) {
  addBildToNewList(bild, id);
  //Create Card
  return `
  <div class="${cssclass}">
    ${createTitleText(titletext)} 
    ${createImgContainer(bild, text, id)}
    ${createButtonContainer(id)}
  </div>`;
}
//Body
for (let i of myArray) {
  connWithMain.innerHTML += catchObject(i);
}
