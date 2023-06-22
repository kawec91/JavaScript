//Array
const myArray = [
  {
    reiseziel: "Democratic Republic of the Congo",
    beschreibung:
      "The Democratic Republic of the Congo, also known as Congo-Kinshasa and formerly known as Zaire, is a country in Central Africa with a population of around 112 million.1 It is the second-largest country in Africa and the 11th-largest in the world.01 The national capital and largest city is Kinshasa, which is also the economic center. The country is bordered by the Republic of the Congo, Central African Republic, South Sudan, Uganda, Rwanda, Burundi, Tanzania (across Lake Tanganyika), Zambia, Angola, the Cabinda exclave of Angola, and the South Atlantic Ocean.",
  },
  {
    reiseziel: "Liberia",
    beschreibung:
      "Liberia ist ein Staat an der westafrikanischen Atlantikküste. Der Name des Landes bedeutet „frei“, da sich hier ehemalige Sklaven aus Amerika ansiedelten. Die Republik ist auch eine der wenigen Staaten in Afrika, die im Zeitalter des Imperialismus nicht kolonialisiert wurden.",
  },
  {
    reiseziel: "Liechtenstein",
    beschreibung:
      "Liechtenstein [ˈlɪçtn̩ˌʃtaɪ̯n] (amtlich Fürstentum Liechtenstein) ist ein Binnenstaat im Alpenraum Mitteleuropas und der sechstkleinste Staat der Erde. Laut seiner Verfassung ist es ein Fürstentum, das als konstitutionelle Erbmonarchie auf demokratisch-parlamentarischer Grundlage organisiert ist.",
  },
  {
    reiseziel: "Oman",
    beschreibung:
      "سلطنة عمان, DMG salṭanat ʿumān) ist ein Staat in Vorderasien im Osten der Arabischen Halbinsel. Die rund fünf Millionen Einwohner leben vorwiegend in Städten. Fast die Hälfte der Bevölkerung sind Immigranten, vorwiegend aus Indien.",
  },
];

//Verbindung
const ver = document.getElementById("myId");

//Function
function auflisten(text, info) {
  return `
    <div class="card">
        <h4>${text}</h4>
        <hr style="margin-top: 15px; margin-bottom: 15px;">
        <p>${info}</p>
    </div>
    `;
}
//Komponent
function darstellen(titel, liste) {
  var sammeln = "";
  for (let x = 0; x < liste.length; x++) {
    sammeln += auflisten(liste[x].reiseziel, liste[x].beschreibung);
  }
  return `
    <div style="padding: 25px;">
        <h2 style="margin-bottom: 15px; width:100%; display:flex; justify-content:center;">${titel}</h2>
        ${sammeln}
    </div>
    `;
}

ver.innerHTML = darstellen("Meine Reiseziele", myArray);
