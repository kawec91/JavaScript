//Verbindung
const conWithInhalt = document.getElementById("main-div");
//Variable
const todoArray = [
  { id: -1, text: "test" },
  { id: -2, text: "test" },
];
let todoArrayIdNumber = 100;

//Functionen
function createBlock(element, content) {
  return `<${element}>${content}</${element}>`;
}
function createInput(type, id) {
  return `<input type="${type}" id="${id}">`;
}
function createImage(img) {
  return `<img src="${img}">`;
}
function createButton(text, func) {
  return `<button onclick="${func}">${text}</button>`;
}
//Add to list and rebuild list in HTML
function addToList(id, text, listId) {
  let conn = document.getElementById(listId);
  todoArray.push({ id: id, text: text });
  todoArrayIdNumber++;
  conn.innerHTML = createListe(todoArray, "listResult");
  console.log(todoArray);
}
//Clear input field value
function btnClear(id) {
  let conn = document.getElementById(id);
  conn.value = "";
}
//Confirm input field value, show it in alert, add values to list, set felt to empty
function btnConfirm(id) {
  let conn = document.getElementById(id);
  alert(`New TODO added: ${conn.value}`);
  addToList(todoArrayIdNumber, conn.value, "listResult");
  conn.value = "";
}
function btnEdit(id) {
  //Conn with liste (and search object id)
  let conn = todoArray.find((x) => x.id === id);
  //Conn with HTML
  let connHtml = document.getElementById(id);
  //Take value from object and save it
  let oldText = conn.text;
  //Show old value and ask for new one
  let newText = prompt(`Old text: ${oldText}, let's make some changes!`);
  //Change value on object
  conn.text = newText;
  //Show in html
  connHtml.innerHTML = `${newText} ${createButton(
    "Edit",
    `btnEdit(${id})`
  )} ${createButton("Delete", `btnDelete(${id})`)}`;
  //show in console
  console.log(conn.text);
}
function btnDelete(id) {
  console.log(todoArray);
  //Conn with liste (and search object id)
  let conn = todoArray.findIndex((x) => x.id === id);
  //Con with html
  let connHtml = document.getElementById(id);
  //Remove Object from list
  todoArray.splice(conn, 1);
  //TODO
  console.log(todoArray);
  //Return HTML without HTML-ELEMENT
  return connHtml.parentNode.removeChild(connHtml);
}
//Create List Items
function createListe(array) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result += `
    <li id="${array[i].id}">
        ${array[i].text}
        ${createButton("Edit", `btnEdit(${array[i].id})`)}
        ${createButton("Delete", `btnDelete(${array[i].id})`)}
    </li>
    `;
  }
  return result;
}
//Create Box with TODOs
function createListeBox(element, array, id) {
  return `<${element} id="${id}">${createListe(array)}</${element}>`;
}
//Create our App
function createApp(liste) {
  conWithInhalt.innerHTML += `
    ${createBlock(
      "div",
      `
       ${createBlock("h3", "TODO:")}
       ${createInput("text", 1)} 
       ${createButton("Confirm", "btnConfirm(1)")} 
       ${createButton("Clear", "btnClear(1)")}
       ${createBlock("span", "<hr>")}
       ${createListeBox("ol", liste, "listResult")}
       `
    )}
    `;
}
//Call function
createApp(todoArray);
