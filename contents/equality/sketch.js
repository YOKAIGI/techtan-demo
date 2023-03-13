let criminal = "";

let wantedImg;
let balloonImg;

let dogImg;
let dogImgWidth;
let dogBlackImg;

let catImg;
let catImgWidth;
let catBlackImg;

let rabbitImg;
let rabbitImgWidth;
let rabbitBlackImg;

function preload() {
  wantedImg = loadImage("assets/wanted.png");
  balloonImg = loadImage("assets/balloon.png");
  dogImg = loadImage("assets/dog.png");
  dogBlackImg = loadImage("assets/dog_black.png");
  catImg = loadImage("assets/cat.png");
  catBlackImg = loadImage("assets/cat_black.png");
  rabbitImg = loadImage("assets/rabbit.png");
  rabbitBlackImg = loadImage("assets/rabbit_black.png");
}

function setup() {
  const canvas = createCanvas(windowWidth, windowWidth);
  canvas.parent("canvas");
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(30);
  textStyle(BOLD);

  dogImgWidth = dogImg.width * 0.8;
  catImgWidth = catImg.width * 0.8;
  rabbitImgWidth = rabbitImg.width * 0.8;
}

function draw() {
  background("#48B0D2");
  setCode();

  drawWanted();
  drawBalloon();
  drawDog();
  drawCat();
  drawRabbit();
}

function mouseClicked() {
  handleClick();
}

const setCode = () => {
  const code = `# 容疑者の顔
yogisha = input('犯人は誰かな？')

if hannin == yogisha:
  print('成功')
else: 
  print('失敗')`;
  document.querySelector("code").innerHTML = code;
  hljs.initHighlightingOnLoad();
};

const handleReload = () => {
  criminal = "";
};

const drawWanted = () => {
  image(
    wantedImg,
    width / 2,
    height * (2 / 5),
    width / 2,
    wantedImg.height * (width / 2 / wantedImg.width)
  );
};

const drawBalloon = () => {
  if (criminal == "dog") {
    image(
      balloonImg,
      width / 6,
      height * (3 / 8),
      dogImgWidth,
      balloonImg.height * (dogImgWidth / balloonImg.width)
    );
    fill("#f00");
    text("!=", width / 6, height * (3 / 8) * 1.05);
  } else if (criminal == "cat") {
    image(
      balloonImg,
      width / 2,
      height * (3 / 8),
      catImgWidth,
      balloonImg.height * (catImgWidth / balloonImg.width)
    );
    fill("#f00");
    text("!=", width / 2, height * (3 / 8) * 1.05);
  } else if (criminal == "rabbit") {
    image(
      balloonImg,
      width * (5 / 6),
      height * (3 / 8),
      rabbitImgWidth,
      balloonImg.height * (rabbitImgWidth / balloonImg.width)
    );
    fill("#066292");
    text("==", width * (5 / 6), height * (3 / 8) * 1.05);
  }
};

const drawDog = () => {
  if (criminal == "dog") {
    image(
      dogImg,
      width / 6,
      height * (6 / 7),
      dogImgWidth,
      dogImg.height * (dogImgWidth / dogImg.width)
    );
  } else {
    image(
      dogBlackImg,
      width / 6,
      height * (6 / 7),
      dogImgWidth,
      dogImg.height * (dogImgWidth / dogImg.width)
    );
  }
};

const drawCat = () => {
  if (criminal == "cat") {
    image(
      catImg,
      width / 2,
      height * (6 / 7),
      catImgWidth,
      catImg.height * (catImgWidth / catImg.width)
    );
  } else {
    image(
      catBlackImg,
      width / 2,
      height * (6 / 7),
      catImgWidth,
      catImg.height * (catImgWidth / catImg.width)
    );
  }
};

const drawRabbit = () => {
  if (criminal == "rabbit") {
    image(
      rabbitImg,
      width * (5 / 6),
      height * (6 / 7),
      rabbitImgWidth,
      rabbitImg.height * (rabbitImgWidth / rabbitImg.width)
    );
  } else {
    image(
      rabbitBlackImg,
      width * (5 / 6),
      height * (6 / 7),
      rabbitImgWidth,
      rabbitImg.height * (rabbitImgWidth / rabbitImg.width)
    );
  }
};

const handleClick = () => {
  if (mouseY < height && mouseY > 0) {
    if (abs(mouseX - width / 6) < dogImgWidth / 2) {
      criminal = "dog";
    } else if (abs(mouseX - width / 2) < catImgWidth / 2) {
      criminal = "cat";
    } else if (abs(mouseX - width * (5 / 6)) < rabbitImgWidth / 2) {
      criminal = "rabbit";
    }
  }
};
