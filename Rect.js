class Rect{
    constructor(x,y, height,){
        var options = {
            'friction' : 4.0    
        }
        this.body = Bodies.rectangle(x,y,25,height,options);
        this.width = 25;
        this.height = height;
        World.add(world, this.body);
        //Matter.Body.setAngle(this.body, angle);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        stroke("black");
        fill(255,0,0);
        rect(0,0,this.width,this.height,);
        pop();
    }
}