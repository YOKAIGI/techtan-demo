function setCode() {
  const code = `# 好きな数字を入力する
number1 = input()
number2 = input()
  
# 計算
result = number1 + number2
  
# 計算結果を表示する
print(result)`;
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
