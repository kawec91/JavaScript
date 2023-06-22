//Connection
const connWithErgebnis = document.getElementById("ergebnis");

//Function
function sagWas(titel, info) {
  connWithErgebnis.innerHTML += `<h3>${titel}</h3><p>${info}</p>`;
}

sagWas(
  "MyTitel1",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci odio facilis, repudiandae asperiores, doloremque dolor, explicabo nam maiores modi cupiditate iusto quae eaque consequuntur numquam."
);
sagWas(
  "BestTitelEver",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci odio facilis, repudiandae asperiores, doloremque dolor, explicabo nam maiores modi cupiditate iusto quae eaque consequuntur numquam."
);
sagWas(
  "ACHTUNG!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci odio facilis, repudiandae asperiores, doloremque dolor, explicabo nam maiores modi cupiditate iusto quae eaque consequuntur numquam."
);
