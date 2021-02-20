let bx;
let by;
let boxSize = 40;
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;
let Floor = 0;
let y = 100;
let inFloor = true;
let vel = 0;
let acc = 0.5

//setup the variable

function setup() {
  createCanvas(1000, 600);
  Floor = height - boxSize;
  bx =  1000/ 2.0;
  by = 600/2;
  //by = Floor;
  rectMode(RADIUS);
  frameRate(60);
}

//draw the square

function draw() {
  background(120,100,130);

  // Test if the cursor is over the box
  //13cm = 600px
  //1cm = x = 46.px
  if (
    mouseX > bx - boxSize &&
    mouseX < bx + boxSize &&
    mouseY > by - boxSize &&
    mouseY < by + boxSize
  ) {
    overBox = true;
    
    
    if (!locked) {
      fill(244, 122, 158);
      vel = 1;
    }
  } else {
    if(by < Floor ){
   
    by = by + vel;
    vel += acc;
    
    rect(bx,by,boxSize,boxSize);
    rect(bx,by,boxSize-10,boxSize-10);
    }
    
    fill(244, 122, 158);
    overBox = false;
  }

  // Draw the box
  rect(bx, by, boxSize, boxSize);
  rect(bx,by,boxSize-10,boxSize-10);
}



function mousePressed() {
  if (overBox) {
    locked = true;
    fill(255, 255, 255);
  } else {
    locked = false;
  }
  xOffset = mouseX - bx;
  yOffset = mouseY - by;
}

function mouseDragged() {
  if (locked) {
    bx = mouseX - xOffset;
    by = mouseY - yOffset;
  }
}

function mouseReleased() {
  locked = false;
}

  
