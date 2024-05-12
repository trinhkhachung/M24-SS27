class Department{
    public readonly id: number;
    private name: string;
    employees: any[];
    constructor(id: number, name: string, employee: []) {
        this.id = id;
        this.name = name;
        this.employees = employee;
    }
    decribe(): void{
        console.log(this.id, this.name);
        
    }
}
const department = new Department(1, "hi", []);
department.decribe();