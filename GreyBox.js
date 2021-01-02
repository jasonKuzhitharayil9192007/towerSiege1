class GreyBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }

    display(){
        fill(225,225,225);
        super.display();
    }
}