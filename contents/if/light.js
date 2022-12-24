class Light {
  constructor(x, y, colorName, colorCode) {
    this.x = x;
    this.y = y;
    this.colorName = colorName;
    this.on = colorCode.on;
    this.off = colorCode.off;
    this.radius = 50;
  }

  draw() {
    if (this.colorName == "RED") {
      if (lightColor == "RED") {
        fill(this.on);
      } else {
        fill(this.off);
      }
    } else if (this.colorName == "BLUE") {
      if (lightColor == "BLUE") {
        fill(this.on);
      } else {
        fill(this.off);
      }
    }

    ellipse(this.x, this.y, this.radius * 2);
  }

  onClick() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.radius) {
      lightColor = this.colorName;

      if (lightColor == "RED") {
        playerSpeed = 0;
      } else if (lightColor == "BLUE") {
        playerSpeed = 2;
      }

      setCode(lightColor);
    }
  }
}
