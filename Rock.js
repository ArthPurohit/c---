class Rock{
    constructor(x,y,width,height){

        var options={
            isStatic:false
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(myWorld,this.body)
        this.width=width
         this.height=height 
         this.image=loadImage("images/rock1.png")
    }
    show(){
        var pos=this.body.postion
        imageMode(CENTER)
        fill("Black")
        stroke("grey")
        image(this.image,pos.x,pos.y,this.width,this.height)
    }
}