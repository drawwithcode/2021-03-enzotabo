function Michael(x, y, img, audio, raggio, velocita) {
  this.x = x;
  this.y = y;
  this.col = color(255, 100);
  this.ms = img;
  this.quote = audio;
  this.r = raggio;
  this.speed = random(velocita);
  this.yDir = 1;
  this.xDir = 1;

  this.display = function () {
    image(this.ms, this.x - this.r / 2, this.y - this.r / 2, this.r, this.r);
    stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, 75, 75);
  };

  this.clicked = function () {};

  this.riproduzione = function () {
    if (this.quote.isPlaying == true) {
      theofficesong.stop();
    }
    if (this.quote.isPlaying == false) {
      console.log("CIAO");
      theofficesong.play();
    }
  };

  this.move = function () {
    this.x += 2 * this.speed * this.xDir;
    this.y += 2 * this.speed * this.yDir;
    if (this.y >= height - this.r / 2 || this.y <= this.r / 2) {
      this.yDir *= -1;
    }
    if (this.x > width - this.r / 2 || this.x <= this.r / 2) {
      this.xDir *= -1;
    }
  };

  //   this.intersezione = function (other) {
  //     var d = dist(this.x, this.y, other.x, other.y);
  //     if (d < this.r) {
  //       this.yDir *= -1;
  //       this.xDir *= -1;
  //       //other.xDir *= -1;
  //       //other.yDir *= -1;
  //     } else {
  //       return false;
  //     }
  //   };
}
