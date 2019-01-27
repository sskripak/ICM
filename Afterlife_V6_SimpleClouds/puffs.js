let puffs = [];
let puffNum;

class Puff {
  constructor() {
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    this.width = random(10, 30);
    this.speed = 0.9;
    this.dist = dist(this.x, this.y, width / 2, height / 2);

    let randomX = random(2);
    let randomY = random(2);
    if (randomX <= 1) this.puffDirectionX = 1;
    else this.puffDirectionX = -1;

    if (randomY <= 1) this.puffDirectionY = 1;
    else this.puffDirectionY = -1;

  }


  drawPuff() {
    for (let i = 0; i < 10; i++) {
      push();
      imageMode(CENTER);
      image(puffImg,this.x,this.y,this.width,this.width);
      pop();
    }
  }

  movePuff() {
    this.x += this.speed * this.puffDirectionX;
    this.y += this.speed * this.puffDirectionY; //speed that puffs move
    this.dist = dist(this.x, this.y, width / 2, height / 2);

  }


  puffCollide() {

    ///if the puff is within the radius of blowStrength then
    //move away from center and faster speed
    if (this.dist < blowStrength) {
      //this sets the speed of the puff to inverse of the dist to center
      this.speed = 1 / (this.dist / 500);

      let ratioX = (this.x - (width / 2));
      let ratioY = (this.y - (width / 2));

      //this tells particles to move away from center
      this.puffDirectionX = ratioX/this.dist;
      this.puffDirectionY = ratioY/this.dist;
    }

    ////if the puff hits the wall then bouce back towards center
    if (this.dist > 4*windowWidth/7) {
      if (this.x < 0) {
        this.puffDirectionX = 1;
        this.speed = 0.5;
      }
      if (this.x > windowWidth) {
        this.puffDirectionX = -1;
        this.speed = 0.5;
      }
      if (this.y < 0) {
        this.puffDirectionY = 1;
        this.speed = 0.5;
      }
      if (this.y > windowHeight) {
        this.puffDirectionY = -1;
        this.speed = 0.5;
      }
    }
  }
}
