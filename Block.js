  
class Block{
    constructor(x, y, width, height){
        var options = {
            'restitution':0.4,
            'friction':0.0,
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.visibility=255;
        this.width = width;
        this.height = height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
      }

      score(){
        if(this.visibility <0 && this.visibility >-105){
          score++;

        }
      }
      display(){
        var angle= this.body.angle;
        if(this.body.speed <3){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        }
        else {
          
          World.remove(world,this.body);
          push();
          this.visibility=this.visibility-5;
          tint(255,this.visibility);
          rect(0, 0, this.width, this.height);
          pop();
        }
      }
      
    
  
  };