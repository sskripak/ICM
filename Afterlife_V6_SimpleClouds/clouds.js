let cloudWidth;
let cloudHeight;
let cloudSizeLow;
let cloudSizeHigh;
let clouds = [];
let cloudsX = [];
let cloudsY = [];
let cloudsDirectionX;
let cloudsDirectionY;
let cloudPartNum;


class CloudPart {
  constructor(centerX, centerY,tempImg) {
    this.x = centerX + random(-cloudWidth, cloudWidth);
    this.y = centerY + random(-cloudHeight, cloudHeight);
    this.size = random(cloudSizeLow, cloudSizeHigh);
    this.speed = 0.9;
    this.dist = dist(this.x, this.y, width / 2, height / 2);

    let randomX = random(2);
    let randomY = random(2);
    if (randomX <= 1) this.cloudDirectionX = 1;
    else this.cloudDirectionX = -1;

    if (randomY <= 1) this.cloudDirectionY = 1;
    else this.cloudDirectionY = -1;

    if(tempImg == 0){
      this.pic = cloudImg1;
    }
    if(tempImg ==1){
      this.pic = cloudImg2;
    }
    if(tempImg ==2){
      this.pic = cloudImg3;
    }
    if(tempImg ==3){
      this.pic = cloudImg4;
    }
  }

  displayIt(tempFillG, tempFillB) {

    push();
    imageMode(CENTER);
    // tint(255,10);
    image(this.pic,this.x,this.y,this.size,this.size);
    pop();

  }
  moveIt() {

    this.x += this.speed * this.cloudDirectionX;
    this.y += this.speed * this.cloudDirectionY;
    this.dist = dist(this.x, this.y, width / 2, height / 2);
  }
  cloudCollide() {
    ///if the cloud is within the radius of blowStrength then
    //move away from center and faster speed


    if (this.dist < blowStrength) {
      //this sets the speed of the puff to inverse of the dist to center
      this.speed = 1 / (this.dist / 300);

      let ratioX = (this.x - (width / 2));
      let ratioY = (this.y - (width / 2));

      //sends the clouds away from center
      this.cloudDirectionX = ratioX/this.dist;
      this.cloudDirectionY = ratioY/this.dist;
    }


    if (this.dist > 4*windowWidth/7) {
      if (this.x < 0) {
        this.cloudDirectionX = 1;
        this.speed = 0.5;
      }
      if (this.x > windowWidth) {
        this.cloudDirectionX = -1;
        this.speed = 0.5;
      }
      if (this.y < 0) {
        this.cloudDirectionY = 1;
        this.speed = 0.5;
      }
      if (this.y > windowHeight) {
        this.cloudDirectionY = -1;
        this.speed = 0.5;
      }
    }
  }

}


// class Cloud {
//   constructor() {
//     this.x = random(windowWidth); //every cloud starts at this value before moving
//     this.y = random(windowHeight);
//
//     this.parts = [];
//     for (let i = 0; i < cloudPartNum; i++) { // the middle number determines # of cloud pieces
//       this.parts.push(new CloudPart(this.x, this.y));
//     }
//   }
//
//   displayIt() {
//     for (let i = 0; i < this.parts.length; i++) {
//       this.parts[i].displayIt(204 + i, 218 + i);
//     }
//   }
//   moveIt() {
//     for (let i = 0; i < this.parts.length; i++) {
//       this.parts[i].moveIt();
//     }
//   }
//   checkCloudCollide() {
//     for (let i = 0; i < this.parts.length; i++) {
//       this.parts[i].cloudCollide();
//     }
//   }
//
// }
