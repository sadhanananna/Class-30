class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility=255;
        this.image=loadImage("block.png")
        World.add(world, this.body);
      }
      display(){
        console.log(this.visibility)
        if(this.body.speed < 3){
          imageMode(CENTER)
          image(this.image, this.body.position.x, this.body.position.y, 30, 40);
          
         }
         else{
           World.remove(world, this.body);
           push();
           this.visibility = this.visibility - 5;
           tint(255,this.visibility);
           image(this.image, this.body.position.x, this.body.position.y, 30, 40);
           pop();
         }
         
       }
       score(){
        if (this.visibility < 0 && this.visibility > -1005){
          
         console.log(this.visibility)
          score++
        }
       }
      
      
}
