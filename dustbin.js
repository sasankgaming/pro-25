class Dustbin {
    constructor(x, y, width,height) {
      var options = {
          'restitution':0,
          'friction':1.0,
          'density':1.0
          
      }
      this.body = Bodies.rectangle(x, y , width,height, options);
      this.width = width;
      this.height = height;   
      this.image = loadImage("sprites/dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;    
      push();
      translate(pos.x, pos.y);   
      rectMode(CENTER);
      fill("red");
      strokeWeight(2);
      stroke("darkred");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };