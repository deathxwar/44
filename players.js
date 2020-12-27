class Player{
    constructor(x,y){
        this.player = createSprite(x,y,80,80)
        this.image = loadImage("PR.gif")
        this.imagetop = loadImage("PR 4.jpg")
        this.imagedown = loadImage("PR 3.jpg")
        this.imageright = loadImage("PR 4.jpg")
        this.imageleft = loadImage("PR 2.jpg")
    }
    display(){
       this.player.addImage(this.image);

    }
}