function setCode() {
  const code = `# 犯人の顔
criminal_face = 'XXX'

# 容疑者の顔
suspect_face = input('犯人はお前か！')

if criminal_face == suspect_face:
  print('成功')
else: 
  print('失敗')`;
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
