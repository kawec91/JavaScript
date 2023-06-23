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
function addToList(id, text, listId) {
  let conn = document.getElementById(listId);
  todoArray.push({ id: id, text: text });
  todoArrayIdNumber++;
  conn.innerHTML = createListe(todoArray, "listResult");
  console.log(todoArray);
}
function btnClear(id) {
  let conn = document.getElementById(id);
  conn.value = "";
}
function btnConfirm(id) {
  let conn = document.getElementById(id);
  alert(`New TODO added: ${conn.value}`);
  addToList(todoArrayIdNumber, conn.value, "listResult");
  conn.value = "";
}
function btnEdit(id) {
  let conn = todoArray.find((x) => x.id === id);
  let connHtml = document.getElementById(id);
  let oldText = conn.text;
  let newText = prompt(`Old text: ${oldText}, let's make some changes!`);
  conn.text = newText;
  connHtml.innerHTML = `${newText} ${createButton(
    "Edit",
    `btnEdit(${id})`
  )} ${createButton("Delete", `btnDelete(${id})`)}`;
  console.log(conn.text);
}
function btnDelete(id) {
  console.log(todoArray);
  let conn = todoArray.find((x) => x.id === id);
  //TODO
  console.log(todoArray);
}
function createListe(array, id) {
  let conn = document.getElementById(id);
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
function createListeBox(element, array, id) {
  return `<${element} id="${id}">${createListe(array, id)}</${element}>`;
}
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

createApp(todoArray);
