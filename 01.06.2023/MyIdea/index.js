//Object
const citiesList = [
  //Wuppertal
  {
    cityName: "Wuppertal",
    temp: "26C",
    rain: "80%",
    date: "02.06.2023",
    time: "20:22",
    language: "German",
    currency: "euro",
    citiImage:
      "https://img.zeit.de/news/2021-10/06/warum-sich-eine-reise-nach-wuppertal-lohnt-image.jpg/wide__980x551",
    cityShield:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flagge_Wuppertal.svg/2560px-Flagge_Wuppertal.svg.png",
    countryFlag:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
    attractions: [
      {
        attractionImage:
          "https://supertipp-online.de/wp-content/uploads/2022/12/Generation_15_4_300_dpi_10x15.jpg",
        attractionName: "Wuppertaler Schwebebahn",
        attractionAddress: "Main Street 15, 42275 Wupprtal, Germany, Europe",
        attractionCost: "15currency",
        attractionDescription:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt recusandae deserunt officia harum dignissimos molestias, nisi repudiandae sequi, itaque magnam, enim sapiente. Quaerat sint quisquam reiciendis delectus, quae officiis laborum excepturi? Omnis autem perspiciatis quasi quos saepe, quae totam, esse magni iusto sit iure, facilis quas eum deserunt iste eaque fugit. Commodi numquam aliquam sint et totam ipsam exercitationem consequuntur. Ea molestias autem corrupti tenetur. In architecto provident natus corrupti neque commodi odio, labore sapiente, ut modi, impedit nulla quibusdam cupiditate. Deserunt mollitia dicta consectetur at voluptatum hic ipsum excepturi incidunt fugiat doloremque repellendus alias repudiandae, voluptate rerum esse maxime.",
      },
      {
        attractionImage:
          "https://zoos.media/wp-content/uploads/2018/05/afrielswupp.jpg",
        attractionName: "Zoologischer Garten Wuppertal",
        attractionAddress: "Main Street 15, 42275 Wupprtal, Germany, Europe",
        attractionCost: "15currency",
        attractionDescription:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt recusandae deserunt officia harum dignissimos molestias, nisi repudiandae sequi, itaque magnam, enim sapiente. Quaerat sint quisquam reiciendis delectus, quae officiis laborum excepturi? Omnis autem perspiciatis quasi quos saepe, quae totam, esse magni iusto sit iure, facilis quas eum deserunt iste eaque fugit. Commodi numquam aliquam sint et totam ipsam exercitationem consequuntur. Ea molestias autem corrupti tenetur. In architecto provident natus corrupti neque commodi odio, labore sapiente, ut modi, impedit nulla quibusdam cupiditate. Deserunt mollitia dicta consectetur at voluptatum hic ipsum excepturi incidunt fugiat doloremque repellendus alias repudiandae, voluptate rerum esse maxime.",
      },
      {
        attractionImage:
          "https://zoos.media/wp-content/uploads/2018/05/afrielswupp.jpg",
        attractionName: "Wuppertal Botanical Garden",
        attractionAddress: "Main Street 15, 42275 Wupprtal, Germany, Europe",
        attractionCost: "15currency",
        attractionDescription:
          "The Botanical Garden, or also known as the Botanischer Garten, is an amazing place to visit during your visit to Wuppertal. Originally founded in 1890, the city’s botanical garden was later moved in 1910 to Ellerschen Villa. This villa belonged to textile magnates in the 19th century.The villa still stands in its original location and is one of the main attractions of the garden. You can visit the Elisenturm observation tower to enjoy a great view of the tower.In the garden, you will find more than 400 different species of peonies, iris, scilla, gladiolus, and several others.",
      },
    ],
    id: 1,
  },
  //Katowice
  {
    cityName: "Katowice",
    temp: "26C",
    rain: "10%",
    date: "02.06.2023",
    time: "20:22",
    language: "Polish",
    currency: "pln",
    citiImage:
      "https://invest.katowice.eu/wp-content/uploads/2023/01/Kato-centrum-czerwiec-2022-fot.-UMK-scaled.jpg",
    cityShield:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Katowice_Flaga.svg/2560px-Katowice_Flaga.svg.png",
    countryFlag:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_Poland_%28normative%29.svg/250px-Flag_of_Poland_%28normative%29.svg.png",
    attractions: [
      {
        attractionImage:
          "https://d-art.ppstatic.pl/kadry/k/r/1/5b/53/62fe145810aa7_o_original.jpg",
        attractionName: "Spodek",
        attractionAddress: "Main Street 15, 42275 Wupprtal, Germany, Europe",
        attractionCost: "15currency",
        attractionDescription:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt recusandae deserunt officia harum dignissimos molestias, nisi repudiandae sequi, itaque magnam, enim sapiente. Quaerat sint quisquam reiciendis delectus, quae officiis laborum excepturi? Omnis autem perspiciatis quasi quos saepe, quae totam, esse magni iusto sit iure, facilis quas eum deserunt iste eaque fugit. Commodi numquam aliquam sint et totam ipsam exercitationem consequuntur. Ea molestias autem corrupti tenetur. In architecto provident natus corrupti neque commodi odio, labore sapiente, ut modi, impedit nulla quibusdam cupiditate. Deserunt mollitia dicta consectetur at voluptatum hic ipsum excepturi incidunt fugiat doloremque repellendus alias repudiandae, voluptate rerum esse maxime.",
      },
    ],
    id: 2,
  },
  //Munich
  {
    cityName: "Munich",
    temp: "26C",
    rain: "40%",
    date: "02.06.2023",
    time: "20:22",
    language: "German",
    currency: "euro",
    citiImage:
      "https://handluggageonly.co.uk/wp-content/uploads/2016/10/Hand-Luggage-Only-2-1.jpg",
    cityShield:
      "https://thumbs.dreamstime.com/b/flag-munich-capital-city-german-state-bavaria-flag-munich-capital-largest-city-german-180569772.jpg",
    countryFlag:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
    attractions: [
      {
        attractionImage:
          "https://geheimtippmuenchen.de/content/uploads/2022/12/geheimtipp-muenchen-wissen-asamkirche0025.jpg",
        attractionName: "Asamkirche",
        attractionAddress: "Main Street 15, 42275 Wupprtal, Germany, Europe",
        attractionCost: "15currency",
        attractionDescription:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt recusandae deserunt officia harum dignissimos molestias, nisi repudiandae sequi, itaque magnam, enim sapiente. Quaerat sint quisquam reiciendis delectus, quae officiis laborum excepturi? Omnis autem perspiciatis quasi quos saepe, quae totam, esse magni iusto sit iure, facilis quas eum deserunt iste eaque fugit. Commodi numquam aliquam sint et totam ipsam exercitationem consequuntur. Ea molestias autem corrupti tenetur. In architecto provident natus corrupti neque commodi odio, labore sapiente, ut modi, impedit nulla quibusdam cupiditate. Deserunt mollitia dicta consectetur at voluptatum hic ipsum excepturi incidunt fugiat doloremque repellendus alias repudiandae, voluptate rerum esse maxime.",
      },
    ],
    id: 3,
  },
];

//Connection
const connectionMain = document.getElementById("main");

//Functions
/////////////////////[ MAIN CARD END ]/////////////////////
function showBTN(id) {
  const connWithInfoCard = document.getElementById(`info-card-id-${id}`);
  const conWithButton = document.getElementById(`button-id-${id}`);
  const connWithButtonContainer = document.getElementById(
    `button-container-${id}`
  );
  if (connWithInfoCard) {
    if (conWithButton.innerHTML === "show") {
      connWithInfoCard.classList.remove("hidden");
      connWithInfoCard.classList.add("show");

      connWithButtonContainer.innerHTML = `<button class="mainCardButton" onclick="showBTN(${id})">hide</button>`;
    } else if (conWithButton.innerHTML === "hide") {
      connWithInfoCard.classList.remove("show");
      connWithInfoCard.classList.add("hidden");
      connWithButtonContainer.innerHTML = `<button class="mainCardButton" onclick="showBTN(${id})">show</button>`;
    }
  }
}

function createMainCardButton(id) {
  return `
  <div class="button-container" id="button-container-${id}">
    <button class="mainCardButton" onclick="showBTN(${id})" id="button-id-${id}">show</button>
  </div>
  `;
}
function createMainExtraContainer(countryFlag, cityShield) {
  return `
  <div class="mainCardMainContentContainerExtras">
    <div class="mainCardMainContentContainerExtrasImage">
        ${createImg(countryFlag)}
    </div>
    <div class="mainCardMainContentContainerExtrasImage">
        ${createImg(cityShield)}
    </div>
  </div>
  `;
}
function createMainContentParagraphCurrency(value) {
  if (value == "euro") return `<p>Currency: € EURO</p>`;
  if (value == "usd") return `<p>Currency: $ USD</p>`;
  if (value == "pln") return `<p>Currency: zł PLN</p>`;
}
function createMainContentParagraphLanguage(value) {
  return `<p>Language: ${value}</p>`;
}
function createMainContentParagraphTime(value) {
  return `<p>Time: ${value}</p>`;
}
function createMainContentParagraphDate(value) {
  return `<p>Date: ${value}</p>`;
}
function createMainContentParagraphRain(value) {
  return `<p>Rain: ${value}</p>`;
}
function createMainContentParagraphTemperature(value) {
  return `<p>Temperature: ${value}</p>`;
}
function createMainCardContent(temp, rain, date, time, language, currency) {
  return `
  <div class="mainCardMainContentContainerContent">
    ${createMainContentParagraphTemperature(temp)}
    ${createMainContentParagraphRain(rain)}
    ${createMainContentParagraphDate(date)}
    ${createMainContentParagraphTime(time)}
    ${createMainContentParagraphLanguage(language)}
    ${createMainContentParagraphCurrency(currency)}
  </div>
  `;
}
function createMainCardTitle(cityName) {
  return `
  <div class="mainCardMainContentContainerTitle">
    <h3>${cityName}</h3>
  </div>
  `;
}
function createMainContentContainer(
  cityName,
  temp,
  rain,
  date,
  time,
  language,
  currency,
  id
) {
  return `
  <div class="mainCardMainContentContainer">
    ${createMainCardTitle(cityName)}
    ${createMainCardContent(temp, rain, date, time, language, currency)}
    ${createMainCardButton(id)}
  </div>
  `;
}
function createImg(image) {
  return `<img src="${image}">`;
}
function createImgContainer(image) {
  return `<div class="image-wrapper">${createImg(image)}</div>`;
}
function createMainCard({
  cityName,
  temp,
  rain,
  date,
  time,
  language,
  currency,
  citiImage,
  cityShield,
  countryFlag,
  attractions,
  id,
}) {
  return `
    <div id="mainCard-${id}" class="mainCard">
      ${createImgContainer(citiImage)}
      ${createMainContentContainer(
        cityName,
        temp,
        rain,
        date,
        time,
        language,
        currency,
        id
      )}
      ${createMainExtraContainer(countryFlag, cityShield)}
    </div>
  `;
}
/////////////////////[ MAIN CARD ^ ]///////////////////////
/////////////////////[ INFO CARD END ]/////////////////////
function createInfoCardContentContainer(
  attractionName,
  attractionAddress,
  attractionCost,
  attractionDescription
) {
  return `
  <div class="info-card-content">
    <h3><b>${attractionName}</b></h3>
    <br />
    <p><b>Address:</b> ${attractionAddress}</p>
    <br />
    <p><b>Entrance Cost:</b> ${attractionCost}</p>
    <br />
    <p>${attractionDescription}</p>
  </div>`;
}
function createVerticalButton(direction) {
  if (direction == "left") {
    return `
    <button class="button-vertical">
      <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-left-b-48.png">
    </button>
    `;
  }
  if (direction == "right") {
    return `
    <button class="button-vertical">
      <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-right-b-48.png">
    </button>
    `;
  }
}

function createInfoCard(
  {
    attractionImage,
    attractionName,
    attractionAddress,
    attractionCost,
    attractionDescription,
  },
  mainCardID
) {
  return `
  <div class="hidden" id="info-card-id-${mainCardID}">
    <div class="info-card">
      ${createVerticalButton("left")}
      ${createImgContainer(attractionImage)}
      ${createInfoCardContentContainer(
        attractionName,
        attractionAddress,
        attractionCost,
        attractionDescription
      )}
      ${createVerticalButton("right")}
    </div>
  </div>`;
}
/////////////////////[ INFO CARD ^ ]////////////////////////

//Main Loop
for (let i of citiesList) {
  connectionMain.innerHTML += createMainCard(i);
  for (let x of i.attractions) {
    connectionMain.innerHTML += createInfoCard(x, i.id);
  }
}
