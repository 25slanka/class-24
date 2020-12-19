class Pig {
    constructor(x,y){
        var options={
            'restitution':0.3,
            'friction':0.3,
            'density':0.3
        } 
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 30;
        this.height = 30;
        World.add(world, this.body);
      }
     
    
     display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
      }
    }