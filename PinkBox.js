
class PinkBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }

    display(){
        fill(225, 192, 203);
        super.display();
    }
}