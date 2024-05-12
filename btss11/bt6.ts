class Product{
    name: string;
    price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
     getDescription(): void{
        console.log(this);
        
     }
}

class Electronics extends Product{
    constructor(name: string, price: number) {
        super(name, price);
    }
}
 const electronics1 = new Electronics("LOL", 100);
 electronics1.getDescription();