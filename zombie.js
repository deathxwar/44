class Zombie{
    constructor(x,y){
      var Options={
          isStatic:true
      }
      this.body=Bodies.circle(x,y,80,Options)
      this.radious=80
      this.image=loadAnimation("zombie1.jpg","zombie2.jpg")
      World.add(world,this.body)
    }
    display(){
        var Pos = this.body.position
        push();
        translate(Pos.x,Pos.y)
        imageMode(CENTER)
        scale(1.0)
        animation(this.image,0,0)
        pop();
    }
}