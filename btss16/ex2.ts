abstract class Job{
    protected type:string;
    constructor(type:string){
        this.type=type
    }
    printType(){
        return `Loai cong viec ${this.type}`
    }
    abstract calculateSalary(): number; 
}
class parTimeJob extends Job {
    workingHour:number
    constructor(type:string,workingHour:number){
        super(type)
        this.workingHour=workingHour
    }
    calculateSalary(): number {
        return 30000 * this.workingHour;
    }
}
class fullTimeJob extends Job {
    calculateSalary(): number {
       return 10000000 
    }
}
let partTimeJob1 = new parTimeJob("Ngay lam",160);
console.log("Luong la",partTimeJob1.calculateSalary());
let fullTimeJob1 = new fullTimeJob("full");
console.log("Luong la",fullTimeJob1.calculateSalary());