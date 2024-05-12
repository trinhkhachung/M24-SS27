"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log(this);
    }
}
class Electronics extends Product {
    constructor(name, price) {
        super(name, price);
    }
}
const electronics1 = new Electronics("LOL", 100);
electronics1.getDescription();
