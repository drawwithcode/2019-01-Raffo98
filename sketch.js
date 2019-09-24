function preload(){

}
  let pos = 0.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
  angleMode(DEGREES);
  frameRate(12);

}
function draw() {
  textSize(width / 25);
  textAlign(CENTER);
  let a = text('Scroll to animate', width / 2, height / 7);
  fill("white");
  translate(width / 2, height / 2);
  stroke(lerpColor(color("#ff71ce"), color("#0fefca"), frameCount/180));
  line(300, 0, 300 * cos(pos * 2), 300 * sin(pos * 2));
}
function mouseWheel(event) {
  print(event.delta);
  if(event.delta < 0){
      pos--;
  }
  else {
      pos++;
  }
  return false;
}
