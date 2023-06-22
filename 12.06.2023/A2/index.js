//Array
const users = [
  {
    vorname: "Lukasz",
    nachname: "Lukawczyk",
    beruf: "FullStack Web Developer",
    image:
      "https://i.natgeofe.com/k/682ff54d-41e8-490b-a58e-1c7d589d6ccc/bosnia-and-herzegovina-kravica-waterfalls.jpg",
    profile_description:
      "Don't comment bad code - rewrite it. - Brian Kernighan",
  },
  {
    vorname: "Ada",
    nachname: "Lukawczyk",
    beruf: "Social Media Manager",
    image:
      "https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/bltc9cb16743baee253/6139e2d111afe6381b258183/US_Cuba_CU_Header.jpg?width=1680&quality=70&auto=webp",
    profile_description: "Talk is cheap.Show me the code. - Linus Torvalds",
  },
  {
    vorname: "Patrick",
    nachname: "Lukawczyk",
    beruf: "FrontEnd Developer",
    image: "https://ifoi.com/images/dominican-republic.jpg",
    profile_description:
      "First, solve the problem.Then write the code. - John Johnson",
  },
  {
    vorname: "Julia",
    nachname: "Lukawczyk",
    beruf: "BackEnd Developer",
    image:
      "https://www.asiandreams.de/wp-content/uploads/2017/04/laos-vang-vieng-fluss-landschaft-e1581973871589-1200x600.jpg",
    profile_description:
      "Developer is an organism that turns coffee into code.",
  },
  {
    vorname: "Yvonne",
    nachname: "Fischer",
    beruf: "Customer Service",
    image:
      "https://images.ctfassets.net/bth3mlrehms2/6XultPxAjxCZ457HtAnQW9/312e1798a4358c23e44ddcfbe707d986/iStock-692556208.jpg?w=2121&h=1414&fl=progressive&q=50&fm=jpg",
    profile_description:
      "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
  },
  {
    vorname: "Andre",
    nachname: "Fischer",
    beruf: "Marketing Manager",
    image:
      "https://mediaim.expedia.com/destination/1/0726d25cd4b2bc198b974c6c1cdae31f.jpg",
    profile_description:
      "Code is like humor. When you have to explain it, it’s bad. – Cory House",
  },
  {
    vorname: "Yannick",
    nachname: "Fischer",
    beruf: "Tax Specialist",
    image:
      "https://e5g2g5v2.rocketcdn.me/wp-content/uploads/2023/01/Suriname-Sehenswuerdigkeiten.jpg",
    profile_description:
      " In programming, the hard part isn't solving problems, but deciding what problems to solve. – Paul Graham",
  },
];

//Verbindung
const ver = document.getElementById("myDiv");

//Baustein-Funktion
//Create Div with user Name and Surname
function person(vorname, nachname) {
  return `
  <div class="name">
    <p>${vorname}</p>
    <div style="width: 25px;"></div>
    <p>${nachname}</p>
  </div>
    `;
}
//Create a Div with user details - image, work, profil descriptions
function personDetails(beruf, foto, info) {
  return `
    <div style = "display:flex;justify-content:space-between; max-width:100%; align-items: center;">
        <div>
            <img style="width:200px; height:100px; border-radius:25px; object-fit: cover;" src=${foto}>
        </div>
        <div>
            <label>
                <h3>${beruf}</h3>
            </label>
        </div>
        <div>
            <p>${info}</p>
        </div>
    </div>
    `;
}
//Komponent-Funktion
//Create profil card for all users on list
function profil(liste) {
  let samm = "";
  for (let x = 0; x < liste.length; x++) {
    samm += `
    <div class="card">
      ${person(liste[x].vorname, liste[x].nachname)}
      ${personDetails(
        liste[x].beruf,
        liste[x].image,
        liste[x].profile_description
      )}
    </div>`;
  }
  return `
    <div class="profilCard">
      <h5 style="font-size: 25px;">Profil von</h5>
      <div style="height: 25px;"></div>
        ${samm}
    </div>
    `;
}

//Put result of function into HTML
ver.innerHTML = profil(users);
