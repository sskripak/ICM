let lightGreen;
let gold1;
let gold2;
let darkGreen;
let forImg;
let backImg;
let moonImg;
let puffImg;
let cloudImg1;
let cloudImg2;
let cloudImg3;
let cloudImg4;

let blowSlider;
let blowStrength;

function preload(){
	forImg = loadImage('foreground.png');
	backImg = loadImage('background1.png')
  ghostImg = loadImage('ghost_v1.png');
  ghost2Img = loadImage('ghost2.png');
  moonImg = loadImage('moon.png');
	puffImg = loadImage('puff2.png');
	cloudImg1 = loadImage('newMist1.png');
	cloudImg2 = loadImage('newMist2.png');
	cloudImg3 = loadImage('newMist3.png');
	cloudImg4 = loadImage('newMist4.png');

}


function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES);

  ///colors to use in sketch
  lightGreen = color(198, 230, 137);
  gold1 = color(255, 240, 184); //-62,42,98
  gold2 = color(193, 158, 86);
  darkGreen = color(38, 56, 31);

  ///variables for drawing clouds///
  cloudWidth = 200; //these determine how far from cloud center
  cloudHeight = 120; // the circles are
  cloudSizeLow = 120; //determine min and max size of clouds
  cloudSizeHigh = 300;
  cloudDirectionX = 1;
  cloudDirectionY = 1;
  cloudPartNum = 600; //number of cloud parts per cloud
  cloudNum = 15; //number of clouds

	//how many glowing puffs
	puffNum = 150;

  //how many of each kind of ghost//
 ghostNum = 10;

	//generate cloudPartNum amounts of starting points and images for clouds
	for(let i = 0;i<cloudNum;i++){
		cloudsX[i] = random(windowWidth);
		cloudsY[i] = random(windowHeight);

	}

  //creates the clouds
  for (let i = 0; i < cloudPartNum; i++) {
    clouds[i] = new CloudPart(cloudsX[floor(random(cloudNum))],cloudsY[floor(random(cloudNum))],floor(random(3)));
  }

  //creates the glowing puffs
  for(let i = 0; i<puffNum;i++){
  	puffs[i] = new Puff();
  }
  ghostAng = 0;

  ///make 2 kinds of ghosts//

    for(let i = 0;i<ghostNum;i++){
  	ghosts1[i] = new Ghost(ghostAng+random(360),random(75,700),random(0.5,1));
  }

  ////create slider to simulate strength of blowing///
  blowSlider = createSlider(0,windowWidth/3,0);
  blowSlider.position(500,500);




}



function draw() {
  background(darkGreen);
  noStroke();
  blowStrength = blowSlider.value();

  ////draw the moon////
  image(moonImg,2/3*width,1/5*height,150,150);
  //draw the background//
	image(backImg,0,0,windowWidth,windowHeight)


  fill(gold2);

////draw and move clouds
  for (let i = 0; i < clouds.length; i++) {
    clouds[i].displayIt();
    clouds[i].moveIt();
    clouds[i].cloudCollide();
  }

  //draw and move ghosts//
  for(let i = 0;i<ghosts1.length;i++){
  	ghosts1[i].moveDrawGhost();
  }

  ////draw and move puffs
  for (let i = 0; i < puffs.length; i++) {
    puffs[i].drawPuff();
    puffs[i].puffCollide();
    puffs[i].movePuff();

  }
  ///////





  ///////




	/////draw the foreground////
  image(forImg,0,0,windowWidth,windowHeight)
	//move thr ghosts forwrd
  ghostAng-=0.1;

}
