let parakeetImg;
let balloonImg;
let isSubmitted = false;
let message = "";

function setCode() {
  const code = `# 好きな言葉を入力する
message = input('ﾅﾆｶ ｶｲﾃﾐﾖｳ')

# 入力した言葉を表示する
print(message)`;
  document.querySelector("code").innerHTML = code;
  hljs.initHighlightingOnLoad();
}

function handleReload() {
  isSubmitted = false;
  message = "";
  document.querySelector(".form input[type='text']").value = message;
}

function handleSubmit() {
  message = document.querySelector(".form input[type='text']").value;

  if (!message) {
    message = "メッセージを入力してﾋﾟﾖ";
  }

  isSubmitted = true;
}

function preload() {
  parakeetImg = loadImage("assets/parakeet.png");
  balloonImg = loadImage("assets/balloon.png");
}

function setup() {
  const canvas = createCanvas(windowWidth, windowWidth);
  canvas.parent("canvas");
  setCode();
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(18);
  textStyle(BOLD);
}

function draw() {
  background("#48B0D2");

  if (isSubmitted) {
    drawBalloon();
    drawMessage();
  }

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

function drawMessage() {
  fill(34, 34, 34);
  text(message, width * (2 / 5), height * (1 / 3));
}
