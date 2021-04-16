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
        
        if(this.body.speed < 3){
          imageMode(CENTER)
          image(this.image, this.body.position.x, this.body.position.y, 50, 50);
          
         }
         else{
           World.remove(world, this.body);
           push();
           this.visiblity = this.visiblity - 5;
           tint(255,this.visiblity);
           image(this.image, this.body.position.x, this.body.position.y, 50, 50);
           pop();
         }
         
       }
       score(){
        if (this.visiblity < 0 && this.visiblity > -1005){
          score++
        }
       }
      
      
}
