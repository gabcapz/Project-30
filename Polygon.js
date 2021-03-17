class Polygon{
    constructor(x,y,r){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : true
        }
        this.body = Bodies.circle(50, 200, 20);
        this.r = r;
        this.image = loadImage("polygon.png");
        World.add(world,this.body);
    }

    display(){
        push();
        var angle = this.body.angle;
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image ,this.body.position.x,this.body.position.y,40,40);
        pop();
    }
}