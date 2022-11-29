var x, y, r;

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    x = width/2;
    y = height/2;
    r = 200;
    background(220);
}

if (time = < 0.2){
    r = 100;
} else r = 100{;
}


function draw() {
    


    if(x < 0 - r/2){
        x = height + r/2;
    }

    x--;

    
     if( x % 40 === 0 ){
        stroke(10)
     } else {
        noStroke();
     }

     if( x % 10 === 0 ){
        fill(random(0,255), random(0, 255), random(0,255));
     }

    ellipse(x, y, r);
}