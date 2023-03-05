/*
Based on Alexander Miller’s video on Recreating Vintage Computer Art with Processing and inspired by John Whitney's work:
https://www.youtube.com/watch?v=LaarVR1AOvs&t=181s
*/

let t = 0;
let numLines = 1000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(255);
  strokeWeight(0.1);
  stroke(255);
}

function draw() {
  colorMode(RGB)
 
  translate(width / 2, height / 2);
  rotate(frameCount/500);
  
  let amplitude = width /4;
  let variable=0;
  let increasing=10;
  variable+= increasing;
  
  if ( variable < 0 || variable > 2000)   increasing *= -1;
  // console.log(variable);
  let variable1 = 5+variable/200*5;
  let variable2 = 5+variable/10*5;
  scale(-2+sin(frameCount/300)*2);
  background(map(variable,100,2000,0,255),10);
  // console.log(variable1);

  for (let i = 0; i < numLines; i++) {

    let x1 = sin((t + i) / variable1) * amplitude 
           + cos((t + 1) / 5) * 50;

    let y1 = cos((-t + i) / variable1) * amplitude 
           + sin(((t + 1) / 5) * 50);

    let x2 = sin((t + i) / variable2) * (amplitude * 2) 
           + cos(t + 1) * 50;

    let y2 = cos((-t + i) / variable2) * (amplitude * 2)
           + sin(t + 1) * 50;
    colorMode(HSB)
    stroke(200,random(0,255),random(80,100));
    line(x1, y1, x2, y2);
    
  }

  t += 0.1;
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
