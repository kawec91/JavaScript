const myObject = {
  menu: [
    { name: "Startseite", path: "/index.html" },
    { name: "Kontakt", path: "/kontakt.html" },
    { name: "Impressum", path: "/impressum.html" },
  ],
};

//Function
function createHeader(object) {
  return `<header>${createUl(object.menu)}</header>`;
}
function createMain(className) {
  return `<main class="${className}"></main>`;
}
function createUl(liste) {
  let samm = `<ul class="navigation">`;
  for (let i = 0; i < liste.length; i++) {
    samm += `
    
        ${createLi(liste[i].name, liste[i].path)}
    `;
  }
  samm += `</ul>`;
  return samm;
}
function createLi(name, path) {
  return `<li><a href="${path}">${name}</a></li>`;
}
//Show in HTM
function createApp(object) {
  const connWithBody = document.getElementById("id");
  connWithBody.innerHTML = createHeader(object) + createMain("main-style");
}

//Call function
createApp(myObject);
