let isLighting = false;

let onImg;
let offImg;

let imgWidth;
let imgHeight;

function preload() {
  onImg = loadImage("assets/on.png");
  offImg = loadImage("assets/off.png");
}

function setup() {
  const canvas = createCanvas(windowWidth, windowWidth);
  canvas.parent("canvas");
  imageMode(CENTER);

  imgWidth = width / 2;
  imgHeight = onImg.height * (imgWidth / onImg.width);
}

function draw() {
  background("#48B0D2");
  setCode(isLighting);

  if (isLighting) {
    image(onImg, width / 2, height / 2, imgWidth, imgHeight);
  } else {
    image(offImg, width / 2, height / 2, imgWidth, imgHeight);
    fill("#000000bb");
    rect(0, 0, width, height);
  }
}

function mouseClicked() {
  handleSwitch();
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

const toUpperCamelCase = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const handleReload = () => {
  isLighting = false;
};

const handleSwitch = () => {
  if (
    abs(mouseX - width / 2) < imgWidth / 2 &&
    abs(mouseY - height / 2) < imgHeight / 2
  ) {
    isLighting = !isLighting;
  }
};
