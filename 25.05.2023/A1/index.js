let myChoice = prompt("1 - USA | 2 - Poland");

// Connect
const conn = document.getElementById("meinElement");

// If Statement
if (myChoice == 1) {
  // Content - H2
  conn.innerHTML = "<h2>Travel to USA</h2>";
  // IMG
  conn.innerHTML +=
    "<img src='https://www.reisevor9.de/var/site/storage/images/4/1/4/9/1639414-1-ger-DE/USA%20Monument%20Valley%20iStock%20Jaroslav%20Sugarek-1277081120.jpg' style='width: 400px'/>";
  // P
  conn.innerHTML +=
    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem autem quo soluta reiciendis similique eaque.</p>";
  // Design
  conn.style.backgroundColor = "blueviolet";
  conn.style.textAlign = "center";
  conn.style.padding = "25px";
  conn.style.color = "white";
} else if (myChoice == 2) {
  // Content - H2
  conn.innerHTML = "<h2>Love Poland</h2>";
  // IMG
  conn.innerHTML +=
    "<img src='https://www.studyinpoland.pl/en/images/articles/why-poland-new.jpg' style='width: 400px'/>";
  // P
  conn.innerHTML +=
    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem autem quo soluta reiciendis similique eaque.</p>";
  // Design
  conn.style.backgroundColor = "green";
  conn.style.textAlign = "right";
  conn.style.padding = "25px";
  conn.style.color = "white";
  conn.style.borderRadius = "10px";
} else {
  conn.innerHTML = "<h1>WRONG VALUE!</h1>";
  // Design
  conn.style.fontSize = "45px";
  conn.style.textAlign = "center";
}
