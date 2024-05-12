interface Geometry {
    calculateArea(): number;
    calculatePerimeter(): number;
}
class Circles implements Geometry {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangles implements Geometry {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}
let circles = new Circles(5);
console.log("Circle Area:", circles.calculateArea());
console.log("Circle Perimeter:", circles.calculatePerimeter());

let Rectangles = new Rectangles(4, 6);
console.log("Rectangle Area:", Rectangles.calculateArea());
console.log("Rectangle Perimeter:", Rectangles.calculatePerimeter());
