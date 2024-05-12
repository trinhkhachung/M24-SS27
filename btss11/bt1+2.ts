class Employee{
    name: string;
    company: string;
    phone: number;
    constructor(name: string, company: string, phone: number) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo(): void{
        console.log(this);
    }
}

class Manager extends Employee{
    teamSize: number;
    constructor(name: string, company: string, phone: number, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo(): void {
        console.log(this);
    }
}
const manager = new Manager("Hung", "RA", 841234567890, 5);
manager.printInfo();