class Person{
    name: string;
    constructor(name: string = "Hung") {
        this.name = name;
    }
    displayInfo(): void{
        console.log(this);
    }
}

class Student extends Person{
    constructor(name: string) {
        super(name);
    }
}

const studentx = new Student("An");
studentx.displayInfo();