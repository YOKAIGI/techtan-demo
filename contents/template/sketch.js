let isPlaying = false;

let code = `print(Hello, tech-tan!)`;

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
