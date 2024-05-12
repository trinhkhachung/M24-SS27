"use strict";
class Vechicle {
    constructor(speed) {
        this.speed = speed;
    }
    speedup(value) {
        return this.speed += value;
    }
    slowDown(value) {
        return this.speed -= value;
    }
    stop() {
        this.speed = 0;
    }
}
const vechicle = new Vechicle(20);
console.log(vechicle.speedup(5));
console.log(vechicle.slowDown(5));
console.log(vechicle.stop());
