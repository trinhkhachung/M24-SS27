abstract class Employee {
    name : string
    constructor(name:string){
        this.name=name

    }
    abstract getFullName():number;
    //đối với phthuc này trong abstract  thì chỉ tên pthuc và kiueeur dữ liệu 
}
//cách khoiwt tạo đối tượng abstraction
//thêm từ khóa abstrac vào đầu class
//let emp1 = new Employee("huwng")
//emp1 đc gọi la 1 intace của class Eployee
//đối vs abstrac 
class Student extends Employee{
    private age : number

}
class Person {
   name:string
   constructor(name:string) {
    this.name=name
   } 
   getfullname(){


   }
}
class Retangl extends Shape{
    w
}