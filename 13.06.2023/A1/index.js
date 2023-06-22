//Connection
const verWithInhalt = document.getElementById("inhalt");
//Bausteinfunktionen
//Erstellt Input Type:TEXT HTML-Element
function inputText(id) {
  return `<input type="text" id="${id}">`;
}
//Erstellt Input Type:NUMBER HTML-Element
function inputNumber(id) {
  return `<input type="number" id="${id}" />`;
}
//Erstellt Input Type:DATE HTML-Element
function inputDate(id) {
  return `<input type="date" id="${id}" />`;
}
//Erstellt Text-Area HTML-Element
function inputTextArea(id) {
  return `<textarea id="${id}"></textarea>`;
}
//Erstellt Button HTML-Element
function createButton(myFunction, text) {
  return `<button onclick="${myFunction}" class="btn">${text}</button>`;
}
//Erstellt P HTML-Element
function createLabel(text) {
  return `<label>${text}</label>`;
}
//Komponentenfunktionen
//Erstellt DIV, Ruf weitere funktionen und zeigt dass im HTML
function createNameArea(inputLabel1, inputLabel2) {
  verWithInhalt.innerHTML += `
  <div class="bottom-margin">
    ${createLabel(inputLabel1)}${inputText(1)}
    ${createLabel(inputLabel2)}${inputText(2)}
  </div>
  `;
}
//Erstellt DIV, Ruf weitere funktionen und zeigt dass im HTML
function createAgeAndEmailArea(inputLabel1, inputLabel2) {
  verWithInhalt.innerHTML += `
    <div class="bottom-margin">
        ${createLabel(inputLabel1)}${inputNumber(3)}
        ${createLabel(inputLabel2)}${inputText(4)}
    <div>
    `;
}
//Erstellt DIV, Ruf weitere funktionen und zeigt dass im HTML
function createMsgAndButtonArea(text, myFunc, btnText) {
  verWithInhalt.innerHTML += `
  <div >
    ${createLabel(text)}${inputTextArea(5)}
    <hr class="bottom-margin top-margin" />
    <div style="text-align:right;" class="btn-wrapper">
        ${createButton(myFunc, btnText)}
    </div>
  </div>
  `;
}
//Erstellt DIV, Ruf weitere funktionen und zeigt dass im HTML
function createTitleArea(titel) {
  verWithInhalt.innerHTML += `
    <div>
        <h3>${titel}</h3>
        <hr />
    </div>
    `;
}
//Erstellt locale variable mit dem vert von aktuelle formular field zustand
//Zeigt dass im Browser mit Alert funktion
//Erstellt formular field zustand auf null
function infoText() {
  //variable
  let vorname = document.getElementById(1).value;
  let nachname = document.getElementById(2).value;
  let alter = document.getElementById(3).value;
  let contact = document.getElementById(4).value;
  let message = document.getElementById(5).value;
  alert(
    `${vorname} ${nachname} ist ${alter} Jahre Alt. Mann kan ihn/sie mittels ${contact} kontaktieren. Die Person hat folgende Nachricht hinterlassen: ${message}`
  );
  document.getElementById(1).value = "";
  document.getElementById(2).value = "";
  document.getElementById(3).value = "";
  document.getElementById(4).value = "";
  document.getElementById(5).value = "";
}

//Call Functions
createTitleArea("Formular");
createNameArea("Vorname: ", "Nachname: ");
createAgeAndEmailArea("Alter: ", "Tel oder E-Mail: ");
createMsgAndButtonArea("Nachricht: ", "infoText()", "Senden");
