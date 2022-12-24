let isPlaying = false;
let lightColor = "RED";
let playerSpeed = 0;
let playerPosition = 0;

let red = {
  on: "#ff0000",
  off: "#990000",
};

let blue = {
  on: "#0000ff",
  off: "#000099",
};

let redLight;
let blueLight;

function setCode(lightColor) {
  const code = `light_color = '${lightColor}'
  
if light_color == 'RED':
  player_speed = 0
else:
  player_speed = 2`;
  document.querySelector("code").innerHTML = code;
  hljs.initHighlightingOnLoad();
}

function handlePlay() {
  isPlaying = !isPlaying;
  console.log("Playing Button Clicked!");
}

function handleReload() {
  lightColor = "RED";
  playerSpeed = 0;
  playerPosition = 0;
  console.log("Reload Button Clicked!");
}

function setup() {
  const canvas = createCanvas(windowWidth, windowWidth);
  canvas.parent("canvas");

  noStroke();

  redLight = new Light((width * 5) / 6 - 10, (height * 1) / 6 + 10, "RED", red);
  blueLight = new Light(
    (width * 5) / 6 - 10,
    (height * 1) / 2 - 10,
    "BLUE",
    blue
  );

  setCode(lightColor);
}

function draw() {
  background("#a0d8ef");

  fill("#c2c2c2");
  push();
  drawingContext.shadowOffsetX = 2;
  drawingContext.shadowOffsetY = 2;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "#222";
  rect((width * 5) / 6 - 20, width / 2, 20, width / 2);
  rect(
    (width * 2) / 3 - 10,
    10,
    (width * 1) / 3,
    (height * 2) / 3 - 20,
    (width * 1) / 3
  );
  pop();
  redLight.draw();
  blueLight.draw();

  fill("#00ff00");
  playerPosition = playerPosition + playerSpeed;
  rect(playerPosition, height - 40, 20, 40);
}

function touchEnded() {
  redLight.onClick();
  blueLight.onClick();
}
