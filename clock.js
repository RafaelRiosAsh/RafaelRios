
function setup() {
  if(windowWidth<windowHeight){
    Width = windowWidth;
    Height = windowWidth;
  }
  else{
    Width = windowHeight;
    Height = windowHeight;
  }
  Year = Width - Width/10;
  Day = Year - Year/10;
  biggestCircle= Day - Year/5;
  mediumCircle = biggestCircle - Year /10;
  smallCircle = mediumCircle - Year/10;
  strokeSize = 5*(Width/140);
  createCanvas(Width, Height);
  
  
  r1 = random(255); // r is a random number between 0 - 255
  g1 = random(255); // g is a random number betwen 100 - 200
  b1 = random(255); // b is a random number between 0 - 100
  color1 = color(r1, g1, b1);
  
  random_increment = random(80,180);
  r2 = r1+ random_increment;
  g2 = g1+ random_increment;
  b2 = b1+ random_increment;
  color2 = color(r2, g2, b2);
  
  gradient0 = color(r1-40,g1-40,b1-40);
  gradient1 = lerpColor(color1, color2, 0.2);
  gradient2 = lerpColor(color1, color2, 0.4);
  gradient3 = lerpColor(color1, color2, .5);
  gradient4 = lerpColor(color1, color2, 0.8);
  gradient5 = lerpColor(color1, color2, 1);
   
}

function draw() {
  clear();
  
  /*strokeWeight(0); //for debugging
  fill(0)
  text(gradient1+' '+gradient2+' '+gradient3+' '+gradient4+' '+gradient5,20,20);
  fill(color1);
  text('day: '+day()+' width: '+Width+' height: '+Height,20,40);
  fill(color2);
  text('month: '+month()+' divisor: '+divisor,20,60);*/
  strokeWeight(strokeSize);
  noFill();
  stroke(gradient5);
  arc(Width/2, Height/2, smallCircle ,smallCircle, 0-HALF_PI, total(second(),60));
  stroke(gradient4);
  arc(Width/2, Height/2, mediumCircle, mediumCircle, 0-HALF_PI, total(minute(),60));
  stroke(gradient3);
  arc(Width/2, Height/2, biggestCircle, biggestCircle, 0-HALF_PI, total(hour(),24));
  stroke(gradient2);
  arc(Width/2, Height/2, Day, Day, 0-HALF_PI, total(day(),31));
  stroke(gradient1);
  arc(Width/2, Height/2, Year, Year, 0-HALF_PI, total(month(),12));
  drawCircles(60, smallCircle/2, gradient3,second());
  drawCircles(60, mediumCircle/2, gradient2, minute());
  drawCircles(24, biggestCircle/2, gradient1, hour());
  drawCircles(31, Day/2,gradient0, day());
  drawCircles(12, Year/2, gradient0, month());
}


function total(hours,total){
  Time = hours;
  if (Time == 0){
      Time = 0.0001;
  }
  y = (Time*360)/total;
  calculated = (y-90) * (PI/180);
  
  return (y-90) * (PI/180);
}

function drawCircles(shapeCount, circleSize, circleColor, num){
  strokeWeight(0);

  fill(circleColor);
  shapeSize = 100;
  shapeAngle = ((TWO_PI)/shapeCount);
  for(i = num; i >= 0; i--){
    posx = circleSize * sin(i*shapeAngle) + width/2;
    posy = circleSize * -cos(i*shapeAngle) + height/2;
    circle(posx, posy, strokeSize/4.5);
  }
}