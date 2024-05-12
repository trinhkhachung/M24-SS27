class Vehicle {
    public name : string
    protected year : number
    private company : string
    constructor(name:string,year:number,company:string){
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
let vehicle = new Vehicle("alo", 2022, "hung");
console.log(vehicle);
