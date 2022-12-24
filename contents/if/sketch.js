let isPlaying = true;
let lightColor = "RED";
let playerSpeed = 0;
let playerPosition = 10;

let standingImg;
let walkingImg;
let lightImg;

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
  
if light_color == 'RED':
  player_speed = 0
else:
  player_speed = 2`;
  document.querySelector("code").innerHTML = code;
  hljs.initHighlightingOnLoad();
}

function handlePlay() {
  isPlaying = !isPlaying;

  document.querySelector(".playing-button").children[0].className = isPlaying
    ? "fa-solid fa-pause"
    : "fa-solid fa-play";

  console.log(document.querySelector(".playing-button"));

  console.log("Playing Button Clicked!");
}

function handleReload() {
  lightColor = "RED";
  playerSpeed = 0;
  playerPosition = 10;
  console.log("Reload Button Clicked!");
}

function preload() {
  standingImg = loadImage("assets/standing.png");
  walkingImg = loadImage("assets/walking.png");
  lightImg = loadImage("assets/light.png");
}

function setup() {
  const canvas = createCanvas(windowWidth, windowWidth);
  canvas.parent("canvas");

  redLight = new Light((width * 5) / 6 - 8, (height * 1) / 6 + 10, "RED", red);
  blueLight = new Light(
    (width * 5) / 6 - 8,
    (height * 1) / 2 - 10,
    "BLUE",
    blue
  );

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
  if (lightColor == "RED") {
    image(
      standingImg,
      playerPosition,
      (height * 2) / 3,
      (standingImg.width * height) / (standingImg.height * 3),
      (height * 1) / 3
    );
  } else {
    image(
      walkingImg,
      playerPosition,
      (height * 2) / 3,
      (walkingImg.width * height) / (walkingImg.height * 3),
      (height * 1) / 3
    );
  }
}

function touchEnded() {
  redLight.onClick();
  blueLight.onClick();
}
