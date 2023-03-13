class Light {
  constructor(x, y, colorName, colorCode) {
    this.x = x;
    this.y = y;
    this.colorName = colorName;
    this.on = colorCode.on;
    this.off = colorCode.off;
    this.radius = (1 / 9) * width;
  }

  draw = () => {
    if (this.colorName == "赤") {
      if (lightColor == "赤") {
        fill(this.on);
      } else {
        fill(this.off);
      }
    } else if (this.colorName == "青") {
      if (lightColor == "青") {
        fill(this.on);
      } else {
        fill(this.off);
      }
    }

    ellipse(this.x, this.y, this.radius * 2);
  };

  onClick = () => {
    if (dist(mouseX, mouseY, this.x, this.y) < this.radius) {
      lightColor = this.colorName;

      if (lightColor == "赤") {
        playerSpeed = 0;
      } else if (lightColor == "青") {
        playerSpeed = 2;
      }

      setCode(lightColor);
    }
  };
}
