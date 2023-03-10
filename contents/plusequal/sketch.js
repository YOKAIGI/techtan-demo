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

  document.querySelector(".playing-button").children[0].className = isPlaying
    ? "fa-solid fa-pause"
    : "fa-solid fa-play";

  console.log(document.querySelector(".playing-button"));

  console.log("Playing Button Clicked!");
}

function handleReload() {
  console.log("Reload Button Clicked!");
}

function preload() {}

function setup() {
  const canvas = createCanvas(windowWidth, windowWidth);
  canvas.parent("canvas");
  setCode(lightColor);
}

function draw() {
  background("#48B0D2");
}
