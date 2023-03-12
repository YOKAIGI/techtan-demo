function setCode(lightColor) {
  const code = `light_color = '${lightColor}'

# 信号が赤の時
if color == '赤':
  stop() # 止まる
elif color == '黄色':
  run() # 走る
# 信号が青の時
else:
  walk() # 歩く`;
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
  setCode(lightColor);
}

function draw() {
  background("#48B0D2");
}
