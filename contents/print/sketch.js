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

function preload() {}

function setup() {
  const canvas = createCanvas(windowWidth, windowWidth);
  canvas.parent("canvas");
  setCode();
}

function draw() {
  background("#48B0D2");
}
