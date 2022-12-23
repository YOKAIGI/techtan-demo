class Light {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = 50;
  }

  draw() {
    if (this.color == "RED") {
      fill("#ff0000");
    } else if (this.color == "BLUE") {
      fill("#0000ff");
    }

    ellipse(this.x, this.y, this.radius * 2);
  }

  onClick() {
    if (dist(touches[0].x, touches[0].y, this.x, this.y) < this.radius) {
      lightColor = this.color;

      if (lightColor == "RED") {
        playerSpeed = 0;
      } else if (lightColor == "BLUE") {
        playerSpeed = 2;
      }
    }
  }
}
