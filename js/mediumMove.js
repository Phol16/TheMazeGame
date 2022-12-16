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
  //wall3 -top
  if (position.y === 390 && position.x > 40 && position.x < 160) {
    position.y = 380;
  }
  //wall3 -bottom
  if (position.y === 400 && position.x > 40 && position.x < 160) {
    position.y = 410;
  }
  //wall1 -bottom
  if (position.y === 290 && position.x > 40 && position.x < 70) {
    position.y = 300;
  }
  //wall4 -top
  if (position.y === 90 && position.x > 250 && position.x < 280) {
    position.y = 80;
  }
  //wall5 -bottom
  if (position.y === 390 && position.x > 380 && position.x < 410) {
    position.y = 400;
  }
  //restrictions
  //goal
  if (position.x === 470 && position.y === 10) {
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
  //wall1 -left
  if (position.x === 50 && position.y < 300) {
    position.x = 40;
  }
  //wall1 -right
  if (position.x === 60 && position.y < 300) {
    position.x = 70;
  }
  //wall2 -left
  if (position.x === 140 && position.y < 410) {
    position.x = 130;
  }
  //wall2 -right
  if (position.x === 150 && position.y < 410) {
    position.x = 160;
  }
  //wall4 -left
  if (position.x === 260 && position.y > 80) {
    position.x = 250;
  }
  //wall4 -right
  if (position.x === 270 && position.y > 80) {
    position.x = 280;
  }
  //wall5 -left
  if (position.x === 390 && position.y < 400) {
    position.x = 380;
  }
  //wall5 -right
  if (position.x === 400 && position.y < 400) {
    position.x = 410;
  }
  //wall3 -left
  if (position.x === 50 && position.y > 380 && position.y < 410) {
    position.x = 40;
  }
  //restrictions
  //goal
  if (position.x === 470 && position.y === 10) {
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
