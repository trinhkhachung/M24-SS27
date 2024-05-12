class Vehicle{
    protected name: string;
    protected speed: number;
    protected id: number;
    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed =speed;
        this.id = id = Math.floor(Math.random() * 100000);
    }
    speedUp(value: number): void{
        this.speed += value;
    }
    slowDown(value: number): void{
        this.speed += value;
    }
    showSpeed():void {
        console.log(this.speed);
    }
}

class Bycycle extends Vehicle{
    private gear: number;
    constructor(name: string, speed: number, id: number, gear: number) {
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