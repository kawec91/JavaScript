//Variable
let newList = [];
let itemCount = 1;
//Connections
const connWithContent = document.getElementById("content");
const connWithContent2 = document.getElementById("content2");

//Array 1
const list1 = [
  //1
  ["Apfel", "Birne", "Mango", "Kiwi"],
  //2
  ["Tomate", "Gurke", "Zwiebel", "Paprika"],
  //3
  ["Harribo", "Milka", "Toffifee"],
  //4
  ["Cola", "Fanta", "Pepsi", "Sprite", "Apfelschorle"],
];

//functions
//f1
function ersteFunction(listName) {
  for (x of listName) {
    //Put Element X into Function
    zweiteFunction(x);
  }
}
//f2
function zweiteFunction(x) {
  //Show in Screen
  connWithContent.innerHTML += "<p> List No." + itemCount + ": " + x + "</p>";
  //Add to list
  newList.push(x);
  itemCount++;
  //Tabelarisch
  let itemIndex = 0;
  for (n of x) {
    //Show in Screen
    connWithContent.innerHTML +=
      "<p> List item index[" + itemIndex + "]: " + n + "</p>";
    itemIndex++;
  }
  //   for (let n = 0; n < x.length; n++) {
  //     connWithContent.innerHTML +=
  //       "<p> List item index[" + n + "]: " + x[n] + "</p>";
  //   }
}

function showNewList() {
  connWithContent.innerHTML += "<p>New List: " + newList + "</p>";
}

ersteFunction(list1);

console.log("newList inhalt: " + newList);
