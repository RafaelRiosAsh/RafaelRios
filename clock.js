
function setup() {
    if(windowWidth<windowHeight){
        Width = windowWidth;
        Height = windowWidth;
    }
    else{
        Width = windowHeight;
        Height = windowHeight;
    }
    biggestCircle= Width - Width/10;
    mediumCircle = biggestCircle - biggestCircle /10;
    smallCircle = mediumCircle - biggestCircle/10;
    strokeSize = 5*(Width/140);
    createCanvas(Width, Height);
    
    
    r1 = random(255); // r is a random number between 0 - 255
    g1 = random(255); // g is a random number betwen 100 - 200
    b1 = random(255); // b is a random number between 0 - 100
    color1 = color(r1, g1, b1);
    
    random_increment = random(50,130);
    r2 = r1+ random_increment;
    g2 = g1+ random_increment;
    b2 = b1+ random_increment;
    color2 = color(r2, g2, b2);
    
    gradient1 = lerpColor(color1, color2, 0.2);
    gradient2 = lerpColor(color1, color2, 0.6);
    gradient4 = lerpColor(color1, color2, 1);
     
  }
  
  function draw() {
    clear();
    strokeWeight(strokeSize);
    noFill();
    stroke(gradient4);
    arc(Width/2, Height/2, smallCircle ,smallCircle, 0-HALF_PI, total(second(),60));
    stroke(gradient2);
    arc(Width/2, Height/2, mediumCircle, mediumCircle, 0-HALF_PI, total(minute(),60));
    stroke(gradient1);
    arc(Width/2, Height/2, biggestCircle, biggestCircle, 0-HALF_PI, total(hour(),24));
  }
  
  
  function total(hours,total){
    y = (hours*360)/total;
    return (y-90) * (PI/180);
  }
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }