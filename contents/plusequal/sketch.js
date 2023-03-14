let hp = 100;
let mp = 20;
let enemyHp = 10;

let slimeImg;

function preload() {
  slimeImg = loadImage("assets/slime.png");
}

function setup() {
  const canvas = createCanvas(windowWidth, windowWidth);
  canvas.parent("canvas");
  setCode();
  imageMode(CENTER);
}

function draw() {
  background("#48B0D2");

  image(
    slimeImg,
    width / 2,
    height / 2,
    width * 0.7,
    slimeImg.height * ((width * 0.7) / slimeImg.width)
  );
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
};

const handleHealing = () => {
  hp += 10;
  mp -= 2;
};
