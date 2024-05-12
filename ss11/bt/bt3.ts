class Employee{
    name: string;
    company: string;
    phone: number;
    constructor(name: string, company: string, phone: number) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo():void{
        console.log(this);
        
    }
}
let employee = new Employee("Hoa", "NKC", 8412132313);
employee.printInfo()