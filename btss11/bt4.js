"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id = Math.floor(Math.random() * 100000);
    }
    speedUp(value) {
        this.speed += value;
    }
    slowDown(value) {
        this.speed += value;
    }
    showSpeed() {
        console.log(this.speed);
    }
}
class Bycycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
}
const bike = new Bycycle("bike", 20, 1, 5);
bike.showSpeed();
bike.speedUp(10);
bike.showSpeed();
bike.slowDown(10);
bike.showSpeed();
