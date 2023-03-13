let parakeetImg;
let balloon;
let isSubmitted;

function setCode() {
  const code = `# 好きな言葉を入力する
message = input('ｺﾝﾆﾁﾊ')

# 入力した言葉を表示する
print(message)`;
  document.querySelector("code").innerHTML = code;
  hljs.initHighlightingOnLoad();
}

function handleReload() {
  console.log("Reload Button Clicked!");
}

function preload() {
  parakeetImg = loadImage("assets/parakeet.png");
  balloonImg = loadImage("assets/balloon.png");
}

function setup() {
  const canvas = createCanvas(windowWidth, windowWidth);
  canvas.parent("canvas");
  setCode();
}

function draw() {
  background("#48B0D2");
  imageMode(CENTER);

  drawBalloon();
  drawParakeet();
}

function drawParakeet() {
  const parakeetImgWidth = width / 3;
  image(
    parakeetImg,
    width * (3 / 4),
    height * (3 / 5),
    parakeetImgWidth,
    parakeetImg.height * (parakeetImgWidth / parakeetImg.width)
  );
}

function drawBalloon() {
  const balloonImgWidth = width * (2 / 3);
  image(
    balloonImg,
    width * (2 / 5),
    height * (1 / 3),
    balloonImgWidth,
    balloonImg.height * (balloonImgWidth / balloonImg.width)
  );
}
