const jsonObiekt = [
  {
    element: "nav",
    content: [
      {
        element: "div",
        content: [
          {
            element: "img",
            content:
              "https://media.istockphoto.com/id/1293325404/de/foto/geb%C3%A4ude-landmarken.jpg?s=612x612&w=0&k=20&c=271kR4PSOs-ErXyykaE7NtYfiAlAzgynOO62pMIBQeo=",
          },
          {
            element: "p",
            content: "simple text",
          },
        ],
      },
      {
        element: "div",
        content: [
          {
            element: "img",
            content:
              "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2023/01/17/3633531-1338082757.jpg?itok=SuZE17Bn",
          },
          {
            element: "p",
            content: "not very simple text",
          },
        ],
      },
      {
        element: "div",
        content: [
          {
            element: "img",
            content:
              "https://skift.com/wp-content/uploads/2023/02/KV-New-Murabba-Clean_Landscape-scaled-e1676970578883.jpg",
          },
          {
            element: "p",
            content: "Third text on this site",
          },
        ],
      },
    ],
  },

  {
    element: "header",
    content: [
      {
        element: "div",
        content: [
          {
            element: "ul",
            content: [
              {
                element: "li",
                content: [
                  {
                    element: "img",
                    content: "link",
                  },
                  {
                    element: "a",
                    content: "liElement1",
                    link: "link",
                  },
                ],
              },
              {
                element: "li",
                content: [
                  {
                    element: "img",
                    content: "link",
                  },
                  {
                    element: "a",
                    content: "liElement2",
                    link: "link",
                  },
                ],
              },
              {
                element: "li",
                content: [
                  {
                    element: "img",
                    content: "link",
                  },
                  {
                    element: "a",
                    content: "liElement3",
                    link: "link",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        element: "div",
        content: [
          {
            element: "input",
            type: "search",
          },
          {
            element: "button",
            content: "Click",
            func: "alert('BTN WORK!')",
          },
        ],
      },
    ],
  },
  {
    element: "main",
    content: [
      {
        element: "img",
        content: "link",
      },
      {
        element: "dl",
        content: [],
      },
      {
        element: "table",
        content: [],
      },
      {
        element: "img",
        content: "link",
      },
    ],
  },
  {
    element: "footer",
    content: [
      {
        element: "div",
        content: [
          {
            element: "img",
            content: "link",
          },
          {
            element: "img",
            content: "link",
          },
          {
            element: "img",
            content: "link",
          },
          {
            element: "img",
            content: "link",
          },
        ],
      },
      {
        element: "div",
        content: [
          {
            element: "h4",
            content: "h4 titel",
          },
          {
            element: "p",
            content: "afasfsafas",
          },
          {
            element: "hr",
          },
          {
            element: "p",
            content: "jghjghjghjhj",
          },
        ],
      },
      {
        element: "div",
        content: [],
      },
    ],
  },
];
//Baufunctionen
function createTag(tag, content) {
  return `<${tag}>${content}</${tag}>`;
}
function createImg(src) {
  return `<img src="${src}">`;
}

function createAElement(text, path) {
  return `<a href="${path}">${text}</a>`;
}

function createInput(type) {
  return `<input type="${type}">`;
}
function createButton(name, func) {
  return `<button onclick="${func}">${name}</button>`;
}
function createSingleTag(element) {
  return `<${element} />`;
}

function app() {
  const conWithBody = document.getElementById("body");

  conWithBody.innerHTML = `
    ${createTag(
      "nav",
      createTag(
        "div",
        createImg(
          "https://media.istockphoto.com/id/1293325404/de/foto/geb%C3%A4ude-landmarken.jpg?s=612x612&w=0&k=20&c=271kR4PSOs-ErXyykaE7NtYfiAlAzgynOO62pMIBQeo="
        ) + createTag("p", "simple text")
      ) +
        createTag(
          "div",
          createImg(
            "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2023/01/17/3633531-1338082757.jpg?itok=SuZE17Bn"
          ) + createTag("p", "not very simple text")
        ) +
        createTag(
          "div",
          createImg(
            "https://skift.com/wp-content/uploads/2023/02/KV-New-Murabba-Clean_Landscape-scaled-e1676970578883.jpg"
          ) + createTag("p", "Third text on this site")
        )
    )}
    ${createTag(
      "header",
      createTag(
        "div",
        createTag(
          "ul",
          createTag("li", createImg("link") + createAElement("text1", "path")) +
            createTag(
              "li",
              createImg("link") + createAElement("text2", "path")
            ) +
            createTag("li", createImg("link") + createAElement("text3", "path"))
        )
      ) + createTag("div", createInput("search") + createButton("click", "#"))
    )}
    ${createTag(
      "main",
      createImg("link") +
        createTag(
          "dl",
          createTag("dt", "DTitel") +
            createTag("dd", "Text1") +
            createTag("dd", "Text2") +
            createTag("dt", "Dtitel2") +
            createTag("dd", "Text3") +
            createTag("dd", "Text4")
        ) +
        createTag(
          "table",
          createTag(
            "tr",
            createTag("th", "TableHeader1") +
              createTag("th", "TableHeader2") +
              createTag("th", "TableHeader3")
          ) +
            createTag(
              "tr",
              createTag("td", "Table1") +
                createTag("td", "Table2") +
                createTag("td", "Table3")
            ) +
            createTag(
              "tr",
              createTag("td", "Table4") +
                createTag("td", "Table5") +
                createTag("td", "Table6")
            )
        ) +
        createImg("link")
    )}
    ${createTag(
      "footer",
      createTag(
        "div",
        createImg("./social-media/icons8-facebook-48.png") +
          createImg("./social-media/icons8-twitter-48.png") +
          createImg("./social-media/icons8-instagram-48.png") +
          createImg("./social-media/icons8-youtube-48.png")
      ) +
        createTag(
          "div",
          createTag("h4", "H4 Titel") +
            createTag("p", "p element text 1") +
            createSingleTag("hr") +
            createTag("p", "text 2 p element")
        ) +
        createTag(
          "div",
          createSingleTag("hr") +
            createTag(
              "ul",
              createTag("li", "li text 1") +
                createTag("li", "li text 1") +
                createTag("li", "li text 1") +
                createTag("li", "li text 1")
            )
        )
    )}
  `;
}
app();
