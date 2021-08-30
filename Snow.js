class snow {
    constructor(x, y,) {
        var options = {
            'restitution': 0.9,
            'friction': 1.5,
        }
        this.r =40;
        this.body = Bodies.circle(x, y, 20,20,20, options);
        this.image = loadImage("snow5.webp")
        World.add(world, this.body);
    }

    display() {
        
        push();
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y,this.r,this.r);
        pop();
    }

}