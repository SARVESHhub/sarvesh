function setup() {
  createCanvas(700, 480);

//R,G&B values
background(245, 245, 66);
  
//take a big brush
strokeWeight (10);
  
//dip it in colour purple;
stroke ('rgb(164, 66, 245)');
frameRate (10);
}


function draw() {
//declare variables;
  let posX=mouseY;
  let posY=mouseX;
  //place a dot on a screen
  point(posX,posY);
}