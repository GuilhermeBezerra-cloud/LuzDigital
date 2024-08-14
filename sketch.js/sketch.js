function setup() {
    createCanvas(500, 500);
    background("blue");
  }
  
  function draw() {
    
    
    stroke("yellow")
    fill("yellow")
   
   // console.log(mouseIsPressed);
    
    if (mouseIsPressed) {
      triangle(mouseX,mouseY,100,150);
    }  
  }