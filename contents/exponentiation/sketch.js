function setCode() {
  const code = `# 一辺の長さ
side_length = 5

# 正方形の面積
square_area = side_length ** 2

# 立方体の体積
cube_volume = side_length ** 3`;
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
  setCode();
}

function draw() {
  background("#48B0D2");
}
