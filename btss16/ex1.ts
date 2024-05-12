abstract class Shape{
    name:string;
    constructor(name:string){
        this.name  = name
    }
    getName(){
        return this.name
    }
    abstract getSize():void
}
class Rectangle extends Shape{
    width:number;
    height:number;
    constructor(width:number,height:number,name:string){
        super(name);
        this.width = width
        this.height = height
    }
    getSize(){
        return `dài: ${this.height} , rộng: ${this.width}`  
    }
}
let rectan = new Rectangle("Hình chữ nhật",2,5)
console.log(rectan.getName());
console.log(rectan.getSize());