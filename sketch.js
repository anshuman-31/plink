var particles =[];
var plinkos = [];
var divisions = [];
var divisionHeight=300;


function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);


for(var k = 0; k <=width;k = k + 80) {
  Division.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
}

for(var j = 40; j <=width; j=j+50)
{
  plinkos.push(new Plinkos(j,75));
}

for (var j = 15; j <=width-10; j=j+50)
{
  plinkos.push(new Plinko(j,175));
}
for (var  j =25; j <=width-20; j=j+50)
{
  plinkos.push(new Plinko(j,275));
}
for (var j =35; j<=width-30; j=j+50)
{
  plinkos.push(new Plinko(j,375))
 }

 if(frameCount%60===0){
   particles.push(new Particles(random(width/2-10,width/2+10),10,10));
 
 }
}

function draw() {
  background(255,255,255);  

  for (var j=0; j < particles.length; j++) {
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  drawSprites();
}