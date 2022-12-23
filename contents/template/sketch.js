let isPlaying = false;

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
}

function draw() {
  background("#c9c9c9");
}
