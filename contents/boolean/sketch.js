function setCode(lightColor) {
  const code = `light_color = '${lightColor}'
  
if light_color == 'RED':
  player_speed = 0
else:
  player_speed = 2`;
  document.querySelector("code").innerHTML = code;
  hljs.initHighlightingOnLoad();
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
