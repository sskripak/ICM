let ghostImg;
let ghost2Img;
let ghostAng;
let ghosts1 = [];
let ghostsB = [];

let ghost1Num;
let ghost2Num;

class Ghost {
  constructor(tempAng, tempRad, tempSpeed) {
    this.angle = tempAng;
    this.radius = tempRad;
    // this.size = tempRad;
    this.speed = tempSpeed;
    this.opacity = 0;
    let ghostRand = random(2);
    if(ghostRand>1)this.ghost = ghostImg;
    else this.ghost = ghost2Img;

  }

  moveDrawGhost() {
    push();
    translate(width / 2, height / 2);
    translate(this.radius * cos(this.angle), this.radius * sin(this.angle));
    rotate(this.angle);
    this.opacity = map(blowStrength,windowWidth/6,windowWidth/3,0,200)
    tint(255,this.opacity);
    image(this.ghost, 0, 0, 70, 130);
    pop();
    this.angle -= this.speed;
  }
}
