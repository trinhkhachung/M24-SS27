interface changeSpeed{
    speedup(value: number): number
    slowDown(value:number): number
    stop(): void
}

class Vechicle implements changeSpeed{
    speed:number;
    constructor(speed: number) {
        this.speed = speed;
    }
    speedup(value: number): number {
        return this.speed += value;
    }
    slowDown(value: number): number {
        return this.speed -= value
    }
    stop(): void{
        this.speed = 0;    }
}
const vechicle = new Vechicle(20);
console.log(vechicle.speedup(5));
console.log(vechicle.slowDown(5));
console.log(vechicle.stop());
