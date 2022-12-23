let isPlaying = false;
let lightColor = "RED";
let playerSpeed = 0;
let playerPosition = 0;

let redLight;
let blueLight;

function setCode(lightColor) {
  const code = `light_color = "${lightColor}"
  
if light_color == "RED":
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
  console.log("Reload Button Clicked!");
}

function setup() {
  const canvas = createCanvas(windowWidth, windowWidth);
  canvas.parent("canvas");
  setCode();

  redLight = new Light(width / 2, (height * 1) / 4, "RED");
  blueLight = new Light(width / 2, (height * 3) / 4, "BLUE");
}

function draw() {
  background("#c9c9c9");

  redLight.draw();
  blueLight.draw();

  fill("#00ff00");
  playerPosition = playerPosition + playerSpeed;
  rect(playerPosition, height - 40, 20, 40);
}

function touchMoved() {
  redLight.onClick();
  blueLight.onClick();
}
