"use strict";
class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        return `Loai cong viec ${this.type}`;
    }
}
class parTimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class fullTimeJob extends Job {
    calculateSalary() {
        return 10000000;
    }
}
let partTimeJob1 = new parTimeJob("Ngay lam", 160);
console.log("Luong la", partTimeJob1.calculateSalary());
let fullTimeJob1 = new fullTimeJob("full");
console.log("Luong la", fullTimeJob1.calculateSalary());
