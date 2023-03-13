let isDivided = false;

let dishImg;
let largeDishImg;
let gyozaImg;

function preload() {
  dishImg = loadImage("assets/dish.png");
  largeDishImg = loadImage("assets/large_dish.png");
  gyozaImg = loadImage("assets/gyoza.png");
}

function setup() {
  const canvas = createCanvas(windowWidth, windowWidth);
  canvas.parent("canvas");
  setCode();
  imageMode(CENTER);
}

function draw() {
  background("#48B0D2");

  drawDishes();
  drawGyoza();
}

const setCode = () => {
  const code = `# 餃子の数
gyoza_count = 7

# 分ける人数
people_count = 3

# 一人当たりの餃子の計算
my_gyoza_count = gyoza_count // people_count

# 餃子の余り
rest_gyoza_count = gyoza_count % people_count`;
  document.querySelector("code").innerHTML = code;
  hljs.initHighlightingOnLoad();
};

const handleReload = () => {
  isDivided = false;
};

const handleDivide = () => {
  isDivided = true;
};

const drawDishes = () => {
  image(
    largeDishImg,
    width / 2,
    height / 4,
    width * 0.9,
    largeDishImg.height * ((width * 0.9) / largeDishImg.width)
  );

  const dishImgWidth = width / 3;
  image(
    dishImg,
    width / 6,
    height * (3 / 4),
    dishImgWidth,
    dishImg.height * (dishImgWidth / dishImg.width)
  );
  image(
    dishImg,
    width / 2,
    height * (3 / 4),
    dishImgWidth,
    dishImg.height * (dishImgWidth / dishImg.width)
  );
  image(
    dishImg,
    width * (5 / 6),
    height * (3 / 4),
    dishImgWidth,
    dishImg.height * (dishImgWidth / dishImg.width)
  );
};

const drawGyoza = () => {
  const gyozaImgWidth = width / 8.5;
  if (!isDivided) {
    for (let i = 0; i < 7; i++) {
      image(
        gyozaImg,
        width * ((i + 1) / 8.5),
        height / 4,
        gyozaImgWidth,
        gyozaImg.height * (gyozaImgWidth / gyozaImg.width)
      );
    }
  } else {
    image(
      gyozaImg,
      width * (1 / 8.5),
      height / 4,
      gyozaImgWidth,
      gyozaImg.height * (gyozaImgWidth / gyozaImg.width)
    );
    for (let i = 0; i < 3; i++) {
      image(
        gyozaImg,
        width * ((2 * i + 1) / 6) - gyozaImgWidth / 2,
        height * (3 / 4),
        gyozaImgWidth,
        gyozaImg.height * (gyozaImgWidth / gyozaImg.width)
      );
      image(
        gyozaImg,
        width * ((2 * i + 1) / 6) + gyozaImgWidth / 2,
        height * (3 / 4),
        gyozaImgWidth,
        gyozaImg.height * (gyozaImgWidth / gyozaImg.width)
      );
    }
  }
};
