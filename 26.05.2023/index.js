//Variable
let rotateDeg = 0;
const rotateStep = 90;

// functions
function grayOn(isOn) {
  // conn
  const conn = document.getElementById("grayscale-level");
  //Check Conn
  if (conn) {
    // Condition
    if (isOn == 1) {
      //Function Body
      conn.classList.remove("grayIsOff");
      conn.classList.add("grayIsOn");
    }
    // Condition
    else if (isOn == 0) {
      //Function Body
      conn.classList.remove("grayIsOn");
      conn.classList.add("grayIsOff");
    }
  }
}

function blurOn(isBlurOn) {
  // conn
  const conn = document.getElementById("blur-level");
  //Check Conn
  if (conn) {
    // Condition
    if (isBlurOn == 1) {
      //Function Body
      conn.classList.remove("blurOff");
      conn.classList.add("blurOn");
    }
    // Condition
    else if (isBlurOn == 0) {
      //Function Body
      conn.classList.remove("blurOn");
      conn.classList.add("blurOff");
    }
  }
}
function dropShadow(isDropShadowOn) {
  // conn
  const conn = document.getElementById("shadow-level");
  //Check Conn
  if (conn) {
    // Condition
    if (isDropShadowOn == 1) {
      //Function Body
      conn.classList.remove("dropShadowOff");
      conn.classList.add("dropShadowOn");
    }
    // Condition
    else if (isDropShadowOn == 0) {
      //Function Body
      conn.classList.remove("dropShadowOn");
      conn.classList.add("dropShadowOff");
    }
  }
}

function rotateImg(rotateDirection) {
  // conn
  const conn = document.getElementById("img");
  //Check Conn
  if (conn) {
    // Condition
    if (rotateDirection == 1) {
      //Function Body
      rotateDeg += rotateStep;
      conn.style.transform = "rotate(" + rotateDeg + "deg)";
      console.log("Step Forward: " + rotateDeg);
    }
    // Condition
    else if (rotateDirection == 0) {
      //Function Body
      rotateDeg -= rotateStep;
      conn.style.transform = "rotate(" + rotateDeg + "deg)";
      console.log("Step Back: " + rotateDeg);
    }
  }
}
