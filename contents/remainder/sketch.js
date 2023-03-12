function setCode() {
  const code = `# 餃子の数
gyoza_count = 100

# 分ける人数を入力
people_count = input('何人で分ける？')

# 一人当たりの餃子の計算
my_gyoza_count = gyoza_count // int(people_count)

# 餃子の余り
rest_gyoza_count = gyoza_count % int(people_count)`;
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
