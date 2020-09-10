

let windowWidth = 600;
let windowHeight = 400;


function setup() {
  createCanvas(windowWidth, windowHeight);

  r = 50;

  drag = .75
  strength = 0.2

  pos = createVector(mouseX,mouseY);
  vel = createVector(0,0);
}

function draw() {
	background('rgba(0,0,0,0.6)');
	target = createVector(mouseX,mouseY);

	var force = createVector(0,0);
	force =  createVector(target.x-pos.x, target.y-pos.y);
	force.x *= strength
	force.y *= strength

	vel.x *= drag;
	vel.y *= drag;

	vel.x += force.x;
	vel.y += force.y;

	pos.x += vel.x;
	pos.y += vel.y;



	fill(214,10,150);
	ellipse(pos.x,pos.y,r)
}




function mouseDragged() {
	
}

function doubleClicked(){

}