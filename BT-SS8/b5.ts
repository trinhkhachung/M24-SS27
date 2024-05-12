// Union Types cho phép một biến là một trong vài kiểu, trong khi Intersection Types cho phép một biến là tất cả các kiểu cùng một lúc.
// Intersection Types
type Person = {
    name: string;
}
  
type Employee = {
    employeeId: number;
}
  
let myVariable1: Person & Employee;
myVariable1 = { name: 'John', employeeId: 123 };
console.log(myVariable1);

// Union Types
let myVariable2: string | number;
myVariable2 = 'hello';
myVariable2 = 123;
console.log(myVariable2);