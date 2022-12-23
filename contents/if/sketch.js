let isPlaying = false;
let lightColor = "RED";
let playerSpeed = 0;

const code = `light_color = "${lightColor}"
player_speed = ${playerSpeed}

if light_color == "RED":
  player_speed = 0
else:
  player_speed = 10
`;

function setCode() {
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
}

function draw() {
  background("#c9c9c9");
}
