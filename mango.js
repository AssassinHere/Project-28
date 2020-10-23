class Mango{
    constructor(x,y,r){
        var options = {
            isStatic: true,
            friction: 1
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        this.image = loadImage("images/mango.png");
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("yellow");
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}