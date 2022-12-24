let isPlaying = false;
let lightColor = "RED";
let playerSpeed = 0;
let playerPosition = 0;

let red = {
  on: "#ff0000",
  off: "#bb0000",
};

let blue = {
  on: "#0000ff",
  off: "#0000bb",
};

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
  lightColor = "RED";
  playerSpeed = 0;
  playerPosition = 0;
  console.log("Reload Button Clicked!");
}

function setup() {
  const canvas = createCanvas(windowWidth, windowWidth);
  canvas.parent("canvas");

  redLight = new Light((width * 3) / 4, (height * 2) / 7, "RED", red);
  blueLight = new Light((width * 3) / 4, (height * 4) / 7, "BLUE", blue);

  setCode(lightColor);
}

function draw() {
  background("#c9c9c9");

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
