// Variable
let verticalStep = 24;
let horisontalStep = 17;
let characterStartTop = 264;
let characterStartLeft = 340;
let mapName = "city1";

// Connection
const map = document.getElementById("map");
const character = document.getElementById("character");
const message = document.getElementById("msg");
const home1 = document.getElementById("home-1");
const home1enter = document.getElementById("home1-enter");
const home1out = document.getElementById("home1-out");

function down() {
  if (character) {
    //MAP CITY1
    if (mapName == "city1") {
      if (characterStartTop == 144 && characterStartLeft == 510) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 527) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 544) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 561) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 578) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 595) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 612) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 168 && characterStartLeft == 646) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 168 && characterStartLeft == 629) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 168 && characterStartLeft == 612) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 168 && characterStartLeft == 595) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 168 && characterStartLeft == 578) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 168 && characterStartLeft == 561) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 168 && characterStartLeft == 544) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 168 && characterStartLeft == 527) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 168 && characterStartLeft == 510) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 168 && characterStartLeft == 493) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 168 && characterStartLeft == 476) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 168 && characterStartLeft == 459) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 120 && characterStartLeft == 442) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 120 && characterStartLeft == 425) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 120 && characterStartLeft == 408) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 120 && characterStartLeft == 391) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 120 && characterStartLeft == 374) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 425) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 408) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 442) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 459) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 476) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 493) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 510) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 527) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 544) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 561) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 578) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 595) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 612) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 629) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 646) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 289) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 272) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 255) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 238) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 221) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 204) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 187) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 170) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 153) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 136) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 240 && characterStartLeft == 306) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 240 && characterStartLeft == 323) {
        message.innerHTML = "<p>You can't do that</p>";
      }
      //ELSE
      else {
        let characterEndTop = characterStartTop + verticalStep;
        character.style.top = characterEndTop + "px";
        characterStartTop = characterEndTop;
        //Console Position
        console.log("T: " + characterStartTop + " L: " + characterStartLeft);
        //Message
        message.innerHTML = "<p>Hurry up!</p>";
      }
    }
    //MAP CITY1SCHOOL
    else if (mapName == "city1School") {
      if (characterStartTop == 360 && characterStartLeft == 374) {
        home1.classList.remove("hide");
        home1.classList.add("home-enter");
        home1.style.top = "-240px";
        home1.style.left = "-312px";
        home1enter.classList.add("hide");
        home1out.classList.remove("hide");
      } else {
        let characterEndTop = characterStartTop + verticalStep;
        character.style.top = characterEndTop + "px";
        characterStartTop = characterEndTop;
        //Console Position
        console.log("T: " + characterStartTop + " L: " + characterStartLeft);
        //Message
        message.innerHTML = "<p>Hurry up!</p>";
      }
    }
    //ELSE
    else {
      let characterEndTop = characterStartTop + verticalStep;
      character.style.top = characterEndTop + "px";
      characterStartTop = characterEndTop;
      //Console Position
      console.log("T: " + characterStartTop + " L: " + characterStartLeft);
      //Message
      message.innerHTML = "<p>Hurry up!</p>";
    }
  }
}

function up() {
  if (character) {
    //MAP CITY1
    if (mapName == "city1") {
      if (characterStartTop == 0 && characterStartLeft == 340) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 0 && characterStartLeft == 306) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 0 && characterStartLeft == 323) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 0 && characterStartLeft == 357) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 374) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 391) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 408) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 425) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 442) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 459) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 476) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 493) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 510) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 527) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 544) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 561) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 578) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 595) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 612) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 629) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 646) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 168 && characterStartLeft == 612) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 168 && characterStartLeft == 595) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 168 && characterStartLeft == 561) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 168 && characterStartLeft == 544) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 168 && characterStartLeft == 527) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 168 && characterStartLeft == 510) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 192 && characterStartLeft == 374) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 192 && characterStartLeft == 408) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 425) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 442) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 459) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 476) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 493) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 510) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 527) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 544) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 561) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 578) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 595) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 612) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 629) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 646) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 289) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 272) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 255) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 238) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 221) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 204) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 187) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 170) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 153) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 136) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 119) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 168 && characterStartLeft == 391) {
        home1.classList.remove("hide");
        home1.classList.add("home-enter");
        home1enter.classList.remove("hide");
      } else {
        let characterEndTop = characterStartTop - verticalStep;
        character.style.top = characterEndTop + "px";
        characterStartTop = characterEndTop;
        //Console Position
        console.log("T: " + characterStartTop + " L: " + characterStartLeft);
        //Message
        message.innerHTML = "<p>Hurry up!</p>";
      }
    } else {
      let characterEndTop = characterStartTop - verticalStep;
      character.style.top = characterEndTop + "px";
      characterStartTop = characterEndTop;
      //Console Position
      console.log("T: " + characterStartTop + " L: " + characterStartLeft);
      //Message
      message.innerHTML = "<p>Hurry up!</p>";
    }
  }
}

function right() {
  if (character) {
    //MAP CITY1
    if (mapName == "city1") {
      if (characterStartTop == 0 && characterStartLeft == 357) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 24 && characterStartLeft == 357) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 48 && characterStartLeft == 357) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 96 && characterStartLeft == 510) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 120 && characterStartLeft == 510) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 144 && characterStartLeft == 510) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 646) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 96 && characterStartLeft == 646) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 120 && characterStartLeft == 646) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 144 && characterStartLeft == 646) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 168 && characterStartLeft == 646) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 144 && characterStartLeft == 357) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 168 && characterStartLeft == 357) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 192 && characterStartLeft == 408) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 144 && characterStartLeft == 646) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 646) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 168 && characterStartLeft == 391) {
        message.innerHTML = "<p>You can't do that</p>";
      } else {
        let characterEndLeft = characterStartLeft + horisontalStep;
        character.style.left = characterEndLeft + "px";
        characterStartLeft = characterEndLeft;
        //Console Position
        console.log("T: " + characterStartTop + " L: " + characterStartLeft);
        //Message
        message.innerHTML = "<p>Hurry up!</p>";
      }
    } else {
      let characterEndLeft = characterStartLeft + horisontalStep;
      character.style.left = characterEndLeft + "px";
      characterStartLeft = characterEndLeft;
      //Console Position
      console.log("T: " + characterStartTop + " L: " + characterStartLeft);
      //Message
      message.innerHTML = "<p>Hurry up!</p>";
    }
  }
}

function left() {
  if (character) {
    //MAP CITY1
    if (mapName == "city1") {
      if (characterStartTop == 0 && characterStartLeft == 306) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 96 && characterStartLeft == 629) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 120 && characterStartLeft == 629) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 144 && characterStartLeft == 629) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 144 && characterStartLeft == 459) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 168 && characterStartLeft == 459) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 0 && characterStartLeft == 306) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 24 && characterStartLeft == 306) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 48 && characterStartLeft == 306) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 72 && characterStartLeft == 119) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 96 && characterStartLeft == 119) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 120 && characterStartLeft == 119) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 144 && characterStartLeft == 119) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 168 && characterStartLeft == 119) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 192 && characterStartLeft == 119) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 119) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 168 && characterStartLeft == 391) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 120 && characterStartLeft == 306) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 144 && characterStartLeft == 306) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 168 && characterStartLeft == 306) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 192 && characterStartLeft == 306) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 216 && characterStartLeft == 306) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 240 && characterStartLeft == 306) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 240 && characterStartLeft == 85) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 264 && characterStartLeft == 0) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 288 && characterStartLeft == 0) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 312 && characterStartLeft == 102) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 360 && characterStartLeft == 170) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 384 && characterStartLeft == 221) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 408 && characterStartLeft == 272) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 432 && characterStartLeft == 272) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 456 && characterStartLeft == 272) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 504 && characterStartLeft == 102) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 408 && characterStartLeft == 459) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 384 && characterStartLeft == 459) {
        message.innerHTML = "<p>You can't do that</p>";
      } else if (characterStartTop == 360 && characterStartLeft == 459) {
        message.innerHTML = "<p>You can't do that</p>";
      } else {
        let characterEndLeft = characterStartLeft - horisontalStep;
        character.style.left = characterEndLeft + "px";
        characterStartLeft = characterEndLeft;
        //Console Position
        console.log("T: " + characterStartTop + " L: " + characterStartLeft);
        //Message
        message.innerHTML = "<p>Hurry up!</p>";
      }
    } else {
      let characterEndLeft = characterStartLeft - horisontalStep;
      character.style.left = characterEndLeft + "px";
      characterStartLeft = characterEndLeft;
      //Console Position
      console.log("T: " + characterStartTop + " L: " + characterStartLeft);
      //Message
      message.innerHTML = "<p>Hurry up!</p>";
    }
  }
}

function checkPosition() {
  if (mapName == "city1School") {
    character.style.top = "360px";
    characterStartTop = 360;
    character.style.left = "374px";
    characterStartLeft = 374;
  } else if (mapName == "city1SchoolToCity1") {
    character.style.top = "168px";
    characterStartTop = 168;
    character.style.left = "391px";
    characterStartLeft = 391;
    mapName = "city1";
    home1.style.top = "0px";
    home1.style.left = "0px";
  }
}

function homeNo() {
  home1.classList.remove("home-enter");
  home1.classList.add("hide");
  home1enter.classList.add("hide");
}

function homeNoOut() {
  home1.classList.remove("home-enter");
  home1.classList.add("hide");
  home1out.classList.remove("hide");
}

function city1SchoolToCity1() {
  map.classList.remove("city1-school");
  map.classList.add("map");
  mapName = "city1SchoolToCity1";
  checkPosition();
  home1.classList.remove("home-enter");
  home1.classList.add("hide");
  home1out.classList.add("hide");
}

function city1School() {
  map.classList.remove("map");
  map.classList.add("city1-school");
  mapName = "city1School";
  checkPosition();
  home1.classList.remove("home-enter");
  home1.classList.add("hide");
}
