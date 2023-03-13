let isPlaying = true;
let lightColor = "赤";
let playerSpeed = 0;
let playerPosition = 10;

let standingImg;
let walkingImg;
let lightImg;
let arrowImg;

let red = {
  on: "#dd0000",
  off: "#881C0F",
};

let blue = {
  on: "#00bbb4",
  off: "#00615D",
};

let redLight;
let blueLight;

function setCode(lightColor) {
  const code = `light_color = '${lightColor}'

if color == '赤':
  stop() # 止まる

# 信号が赤じゃない時
else:
  walk() # 歩く`;
  document.querySelector("code").innerHTML = code;
  hljs.initHighlightingOnLoad();
}

function handleReload() {
  lightColor = "赤";
  playerSpeed = 0;
  playerPosition = 10;
  console.log("Reload Button Clicked!");
}

function preload() {
  standingImg = loadImage("assets/standing.png");
  walkingImg = loadImage("assets/walking.png");
  lightImg = loadImage("assets/light.png");
  arrowImg = loadImage("assets/arrow_right.svg");
}

function setup() {
  const canvas = createCanvas(windowWidth, windowWidth);
  canvas.parent("canvas");

  redLight = new Light((width * 5) / 6 - 8, (height * 1) / 6 + 10, "赤", red);
  blueLight = new Light((width * 5) / 6 - 8, (height * 1) / 2 - 10, "青", blue);

  setCode(lightColor);
}

function draw() {
  background("#48B0D2");

  stroke("#000000");
  strokeWeight(3);
  fill("#B5CAD7");
  rect((width * 5) / 6 - 12, width / 2, 16, width);

  image(
    lightImg,
    (width * 2) / 3 - 10,
    10,
    (width * 1) / 3,
    (height * 2) / 3 - 20
  );

  noStroke();
  redLight.draw();
  blueLight.draw();

  if (isPlaying) {
    playerPosition = playerPosition + playerSpeed;
  }
  if (lightColor == "赤") {
    image(
      standingImg,
      playerPosition,
      (height * 2) / 3,
      (standingImg.width * height) / (standingImg.height * 3),
      (height * 1) / 3
    );
    image(arrowImg, width / 2, (height * 1) / 2 - 10 - 24, 48, 48);
  } else {
    image(
      walkingImg,
      playerPosition,
      (height * 2) / 3,
      (walkingImg.width * height) / (walkingImg.height * 3),
      (height * 1) / 3
    );
    image(arrowImg, width / 2, (height * 1) / 6 + 10 - 24, 48, 48);
  }
}

function touchEnded() {
  redLight.onClick();
  blueLight.onClick();
}
