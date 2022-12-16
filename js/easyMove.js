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
  console.log(`x:${position.x} y: ${position.y}`);
  position.y = position.y + distance;
  //restrictions
  //wall1 -bottom
  if (position.y === 290 && position.x > 100 && position.x < 130) {
    position.y = 300;
  }
  //wall2 -top
  if (position.y === 90 && position.x > 280 && position.x < 310) {
    position.y = 80;
  }
  //restrictions
  //goal
  if (position.x === 470 && position.y === 470) {
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
  console.log(`x:${position.x} y: ${position.y}`);
  position.x = position.x + distance;
  //restrictions
  //wall1 - left
  if (position.x === 110 && position.y < 300) {
    position.x = 100;
  }
  //wall1 -right
  if (position.x === 120 && position.y < 300) {
    position.x = 130;
  }
  //wall2 -left
  if (position.x === 290 && position.y > 80) {
    position.x = 280;
  }
  //wall2 -right
  if (position.x === 300 && position.y > 80) {
    position.x = 310;
  }
  //restrictions
  //goal
  if (position.x === 470 && position.y === 470) {
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
