//Variable
//Array
const list = [
  //JSON-OBIECT
  {
    vorname: "lukasz",
    nachname: "lukawczyk",
    alter: "32",
    adresse: "Wuppertal",
  },
  //JSON-OBIECT
  {
    vorname: "patrick",
    nachname: "beispiel",
    alter: "22",
    adresse: "Berlin",
  },
  //JSON-OBIECT
  {
    vorname: "Ada",
    nachname: "lukawczyk",
    alter: "27",
    adresse: "Hamburg",
  },
  //JSON-OBIECT
  {
    vorname: "Maja",
    nachname: "Brandt",
    alter: "19",
    adresse: "Wuppertal",
  },
];

// Connection
const connWithAusgabe = document.getElementById("ausgabe");
const connWithResultBox = document.getElementById("result-box");
const connWithResultBoxTitle = document.getElementById("result-box-title");

// Functions
// Function take a list and with for loop show content in HTML
function showAllOptionsOfAllElementsFromListInHTML(listName) {
  listItemNumber = 1;
  for (x of listName) {
    //Tittle
    connWithAusgabe.innerHTML +=
      "<h3> JSON-OBJECT: " + listItemNumber + "</h3>";
    //Name
    connWithAusgabe.innerHTML += "<p>" + x["vorname"] + "</p>";
    //Surname
    connWithAusgabe.innerHTML += "<p>" + x["nachname"] + "</p>";
    //Old
    connWithAusgabe.innerHTML += "<p>" + x["alter"] + "</p>";
    //Adress
    connWithAusgabe.innerHTML += "<p>" + x["adresse"] + "</p>";
    //Add to listItemNumber + 1
    listItemNumber++;
    //Show Object in Console EXTRA
    //console.log(x);
  }
}

// ShowOnly
function showOnlyFromList(key, value, listName) {
  let resultList = [];
  if (connWithResultBox) {
    let listItemNumber = 0;
    for (x of listName) {
      if (x[key] == value) {
        listItemNumber++;
        //Tittle
        connWithResultBox.innerHTML +=
          "<h3> JSON-OBJECT: " + listItemNumber + "</h3>";
        //Name
        connWithResultBox.innerHTML += "<p>" + x.vorname + "</p>";
        //Surname
        connWithResultBox.innerHTML += "<p>" + x.nachname + "</p>";
        //Old
        connWithResultBox.innerHTML += "<p>" + x.alter + "</p>";
        //Adress
        connWithResultBox.innerHTML += "<p>" + x.adresse + "</p>";
        //Show in Console
        console.log(x);
        //Add to resultList
        resultList.push(x);
        //Show in Console resultListLenght
        console.log("result list lenght: " + resultList.length);
        //Add HTML-Element as Tittle
        connWithResultBoxTitle.innerHTML =
          "<h1>Result: " + resultList.length + "</h1>";
      } else {
      }
    }
  }
}

// Submit Search
function submitSearch() {
  // Clear Console
  console.clear();
  //Clear Result Title
  connWithResultBoxTitle.innerHTML = "";
  //Clear Result Content
  connWithResultBox.innerHTML = "";
  //Take Value from id
  let key = document.getElementById("keyOptions").value;
  //Take Value from id
  let value = document.getElementById("search").value;
  //ListName
  const listName = list;
  //Call Function
  showOnlyFromList(key, value, listName);
}

showAllOptionsOfAllElementsFromListInHTML(list);
