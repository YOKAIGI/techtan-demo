let isLighting = false;

function preload() {}

function setup() {
  const canvas = createCanvas(windowWidth, windowWidth);
  canvas.parent("canvas");
  setCode(isLighting);
}

function draw() {
  background("#48B0D2");
}

const setCode = (isLighting) => {
  const str = isLighting.toString();
  const code = `# スイッチの変数
switch = ${toUpperCamelCase(str)}

# スイッチの切り替え
switch = not switch`;
  document.querySelector("code").innerHTML = code;
  hljs.initHighlightingOnLoad();
};

const handleReload = () => {
  console.log("Reload Button Clicked!");
};

const toUpperCamelCase = (str) => str.charAt(0).toUpperCase() + str.slice(1);
