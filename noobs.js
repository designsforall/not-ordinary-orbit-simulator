var speed_orbit = 0.1
var _alpha = 50
var aplha_habit = 30

//

var earth_x= 300;
var earth_y= 300;
var earth_theta= 30;
var earth_r= 100;
var speed_earth= 0.03 * speed_orbit

var moon_x= 300;
var moon_y= 300;
var moon_theta= 30;
var moon_orb_earth= 2;
var moon_r= 150;
var speed_moon= -0.08 * speed_orbit

var mars_x= 300;
var mars_y= 300;
var mars_theta= 24;
var mars_r= 140;
var speed_mars= 0.024 * speed_orbit

var r1= 165,r2= 210;
var x,y,x2,y2;
var astrd_theta= 0;
var ranX,ranY;

//

function setup() {
  createCanvas(600, 600);
}
function draw() {
  background(0);
  randomSeed(500)
  for (var j = 0; j <= 500;j++){
    fill(random(120,255),random(120,255),random(120,255),random(80,150))
    circle(random(800),random(800),random(3))
  }
  
  fill(1,255,255,aplha_habit);
  circle(300,300,300);
  fill(0);
  circle(300,300,130)
  
  fill(1,250,255,aplha_habit);
  circle(300,300,250);
  fill(0);
  circle(300,300,100)
  
  fill(250,1,1,aplha_habit);
  circle(300,300,160);
  
  strokeWeight(8);
  fill(210,210,210)
  circle(300,300,80)
  noStroke();
  
  fill(1,200,150);
  earth_x=+earth_r*cos(earth_theta);
  earth_y=+earth_r*sin(earth_theta);
  stroke(1,200,150,_alpha);
  noFill(255);
  circle(300,300,200);
  noStroke();
  fill(1,200,150);
  circle(earth_x+300,earth_y+300,20);
  earth_theta = earth_theta + speed_earth;
  
  fill(200,200,200);
  moon_x=+moon_r*sin(moon_theta)/8;
  moon_y=+moon_r*cos(moon_theta)/8;
  circle(earth_x+300+moon_x,earth_y+300+moon_y,10);
  moon_theta = moon_theta + speed_moon;
  
  fill(200,200,5);
  mars_x=+mars_r*cos(mars_theta);
  mars_y=+mars_r*sin(mars_theta);
  stroke(200,200,5,_alpha);
  noFill(255);
  circle(300,300,280);
  noStroke();
  fill(200,200,5);
  circle(mars_x+300,mars_y+300,14);
  mars_theta = mars_theta + speed_mars;
  
  fill(210,230,200,100);
  noStroke();
  randomSeed(3000);
  translate(width / 2, height / 2);
  rotate(astrd_theta);
  for(var a = 0;a<3000;a++){
    ranX = random(width) - width/2;
    ranY = random(height) - height/2;
    if(pow(ranX,2)+ pow(ranY,2)< pow(r2,2) &&(pow(ranX,2)+ pow(ranY,2)> pow(r1,2))) {
      fill(255);
      circle(ranX,ranY,random(3));
    }
    astrd_theta -= 0.000005 * speed_orbit
    }
}
