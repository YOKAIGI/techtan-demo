function setCode() {
  const code = `# 回復魔法
def healing():
  hp += 10
  mp -= 2

# 攻撃
def attack():
  enemy_hp -= 10`;
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
