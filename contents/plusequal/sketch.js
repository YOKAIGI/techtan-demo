let enemyHp = 100;

let slimeImg;
let slimeDownImg;

function preload() {
  slimeImg = loadImage("assets/slime.png");
  slimeDownImg = loadImage("assets/slime_down.png");
}

function setup() {
  const canvas = createCanvas(windowWidth, windowWidth);
  canvas.parent("canvas");
  setCode();
  setEnemyHp();
  imageMode(CENTER);
}

function draw() {
  background("#7DCD85");

  drawSlime();
}

const setCode = () => {
  const code = `# かいふく
def healing():
  hp += 10
  mp -= 2

# こうげき
def attack():
  enemy_hp -= 10`;
  document.querySelector("code").innerHTML = code;
  hljs.initHighlightingOnLoad();
};

const handleReload = () => {
  console.log("Reload Button Clicked!");
};

const handleAttack = () => {
  enemyHp -= 10;
  document.querySelector(".enemy-name").textContent = `スライムがあらわれた ▼`;
  setEnemyHp();
};

const handleHealing = () => {
  enemyHp = 100;
  setEnemyHp();
  document.querySelector(".enemy-name").textContent = `こうげきしてごめんね ▼`;
};

const setEnemyHp = () => {
  if (enemyHp > 0) {
    document.querySelector(".enemy-hp").textContent = `HP: ${enemyHp}`;
  } else {
    document.querySelector(".enemy-hp").textContent = `HP: 0`;
    document.querySelector(".enemy-name").textContent = `スライムを倒した！ ▼`;
  }
};

const drawSlime = () => {
  const slimeWidth = width * 0.6;

  if (enemyHp > 0) {
    image(
      slimeImg,
      width / 2,
      height * (3 / 5),
      slimeWidth,
      slimeImg.height * (slimeWidth / slimeImg.width)
    );
  } else {
    image(
      slimeDownImg,
      width / 2,
      height * (3 / 5),
      slimeWidth,
      slimeImg.height * (slimeWidth / slimeImg.width)
    );
  }
};
