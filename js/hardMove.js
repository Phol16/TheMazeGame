let object1Size = {
  width: 20,
  height: 20,
};
let position = {
  x: 10,
  y: 10,
};
let moveRate = 10;
let object1 = document.getElementById("character");
// Update y-axis position.
function updateYPosition(distance) {
  console.log(`x:${position.x} y:${position.y}`);
  position.y = position.y + distance;
  //restrictions
  //wall1 -top
  if (position.y === 40 && position.x < 250) {
    position.y = 30;
  }
  //wall1 -bottom
  if (position.y === 50 && position.x < 250) {
    position.y = 60;
  }
  //wall2 -top
  if (position.y === 40 && position.x > 380) {
    position.y = 30;
  }
  //wall2 -bottom
  if (position.y === 50 && position.x > 380) {
    position.y = 60;
  }
  //wall4 -top
  if (position.y === 140 && position.x > 30 && position.x < 290) {
    position.y = 130;
  }
  //wall4 -bottom
  if (position.y === 150 && position.x > 30 && position.x < 290) {
    position.y = 160;
  }
  //wall5 -top
  if (position.y === 240 && position.x < 250) {
    position.y = 230;
  }
  //wall5 -bottom
  if (position.y === 250 && position.x < 250) {
    position.y = 260;
  }
  //wall6 -top
  if (position.y === 340 && position.x < 410) {
    position.y = 330;
  }
  //wall6 -bottom
  if (position.y === 350 && position.x < 410) {
    position.y = 360;
  }
  //wall10 -top
  if (position.y === 390 && position.x < 410 && position.x > 30) {
    position.y = 380;
  }
  //wall10 -bottom
  if (position.y === 400 && position.x < 410 && position.x > 30) {
    position.y = 410;
  }
  //wall9 -top
  if (position.y === 440 && position.x < 460 && position.x > 30) {
    position.y = 430;
  }
  //wall9 -bottom
  if (position.y === 450 && position.x < 460 && position.x > 30) {
    position.y = 460;
  }
  //wall3 -bottom
  if (position.y === 290 && position.x > 280 && position.x < 310) {
    position.y = 300;
  }
  //wall7 -top
  if (position.y === 90 && position.x > 380 && position.x < 410) {
    position.y = 80;
  }
  //wall8 -top
  if (position.y === 90 && position.x > 430 && position.x < 460) {
    position.y = 80;
  }
  //restrictions
  //goal
  if (position.x === 120 && position.y === 470) {
    location.replace("congratsPage.html");
  }
  //goal
  // Update y-axis position at the edge.
  if (position.y < 0) {
    position.y = 0;
  } else if (position.y > 480) {
    position.y = 480;
  }
}
// Update x-axis position.
function updateXPosition(distance) {
  console.log(`x:${position.x} y:${position.y}`);
  position.x = position.x + distance;
  //restrictions
  //wall3 -left
  if (position.x === 290 && position.y < 300) {
    position.x = 280;
  }
  //wall3 -right
  if (position.x === 300 && position.y < 300) {
    position.x = 310;
  }
  //wall7 -left
  if (position.x === 390 && position.y > 80 && position.y < 360) {
    position.x = 380;
  }
  //wall7 -right
  if (position.x === 400 && position.y > 80 && position.y < 360) {
    position.x = 410;
  }
  //wall8 -left
  if (position.x === 440 && position.y > 80 && position.y < 460) {
    position.x = 430;
  }
  //wall8 -right
  if (position.x === 450 && position.y > 80 && position.y < 460) {
    position.x = 460;
  }
  //wall11 -left
  if (position.x === 40 && position.y < 460 && position.y > 380) {
    position.x = 30;
  }
  //wall11 -right
  if (position.x === 50 && position.y < 450 && position.y > 400) {
    position.x = 60;
  }
  //wall12 -left
  if (position.x === 140 && position.y > 450) {
    position.x = 130;
  }
  //wall12 -right
  if (position.x === 150 && position.y > 450) {
    position.x = 160;
  }
  //wall1 -right
  if (position.x === 240 && position.y > 30 && position.y < 60) {
    position.x = 250;
  }
  //wall2 -left
  if (position.x === 390 && position.y > 30 && position.y < 60) {
    position.x = 380;
  }
  //wall4 -left
  if (position.x === 40 && position.y > 130 && position.y < 160) {
    position.x = 30;
  }
  //wall5 -right
  if (position.x === 240 && position.y > 230 && position.y < 260) {
    position.x = 250;
  }
  //wall10 -right
  if (position.x === 400 && position.y > 380 && position.y < 410) {
    position.x = 410;
  }
  //restrictions
  //goal
  if (position.x === 120 && position.y === 470) {
    location.replace("congratsPage.html");
  }
  //goal
  // Update x-axis position at the edge.
  if (position.x < 0) {
    position.x = 0;
  } else if (position.x > 480) {
    position.x = 480;
  }
}
//changePosition
function refreshPosition() {
  let x = position.x - object1Size.width / 2;
  let y = position.y - object1Size.height / 2;
  let transform = "translate(" + x + " " + y + ")";

  object1.setAttribute("transform", transform);
}
//changePosition
window.addEventListener(
  "keydown",
  function (event) {
    if (event.code === "ArrowDown") {
      // Handle "down"
      updateYPosition(moveRate);
    } else if (event.code === "ArrowUp") {
      // Handle "up"
      updateYPosition(-moveRate);
    } else if (event.code === "ArrowLeft") {
      // Handle "left"
      updateXPosition(-moveRate);
    } else if (event.code === "ArrowRight") {
      // Handle "right"
      updateXPosition(moveRate);
    }
    refreshPosition();
  },
  true
);
