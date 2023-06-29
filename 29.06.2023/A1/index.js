const myObject = {
  menu: [
    { name: "Startseite", path: "/index.html" },
    { name: "Kontakt", path: "/kontakt.html" },
    { name: "Impressum", path: "/impressum.html" },
  ],
  image:
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/2f/2c/b3/entrance-to-the-uganda.jpg?w=600&h=400&s=1",
  imageText:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati similique ex laboriosam recusandae amet fugiat, laudantium assumenda itaque culpa reprehenderit veniam non, vero impedit. Natus.",
  liste: [
    { name: "Kartoffel", path: "" },
    { name: "Karotte", path: "" },
    { name: "Kiwi", path: "" },
    { name: "Kakao", path: "" },
  ],
};

//Function
function createHeader(object) {
  return `<header class="header">${createUl(object.menu)}</header>`;
}
function createMain(className, object) {
  return `<main class="${className}">
  ${
    createDiv(
      "div-left",
      createImage(object.image),
      "",
      createPElement(object.imageText)
    ) +
    createDiv(
      "div-right",
      createPElement(
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint sapiente quasi, impedit consectetur doloribus dolore minima illo sunt maxime esse similique, quo ipsam veniam dignissimos explicabo temporibus dolorum ducimus! Sed, numquam ad in suscipit soluta repellat provident temporibus velit voluptas recusandae repudiandae quae, accusantium quod nulla. Vero, error maiores?"
      ),
      "<hr>",
      createOl(object.liste)
    )
  }
</main>`;
}
function createDiv(className, htmlElement1, htmlElement2, htmlElement3) {
  return `<div class="${className}">${
    htmlElement1 + htmlElement2 + htmlElement3
  }</div>`;
}
function createImage(link) {
  return `<img src="${link}" alt="photo">`;
}
function createPElement(text) {
  return `<p>${text}</p>`;
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
function createOl(liste) {
  let samm = `<ol style="">`;
  for (let i = 0; i < liste.length; i++) {
    samm += `
      
          ${createLi(liste[i].name, liste[i].path)}
      `;
  }
  samm += `</ol>`;
  return samm;
}
function createLi(name, path) {
  return `<li><a href="${path}" style="text-decoration: none; color: black;">${name}</a></li>`;
}
//Show in HTM
function createApp(object) {
  const connWithBody = document.getElementById("id");
  connWithBody.innerHTML =
    createHeader(object) + createMain("main-style", myObject);
}

//Call function
createApp(myObject);
