function setup() {
  createCanvas(600, 380);


  background(231, 219, 201);
  strokeWeight(16);
  strokeCap(SQUARE);

  let a = 50;
  let h = 100;
  let top = 345;
  let bottom=35;
  
  
for (let i = 0; i <= 10; i++) {
  let h = random(240)-120;
  if (i%2 == 1) {
  stroke(52,97,155);
} else {
  stroke(0);
}
  line(50+a*i, top, 50+a*i, bottom);
  fill(231, 219, 201);
  arc(a-8+a*i, 190+h, 50, 50, -HALF_PI, -HALF_PI-PI);
  }    
}
