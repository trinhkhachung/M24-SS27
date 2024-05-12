type Person = {
    name: string,
    age: number,
    address: {}
}

let person: Person = {
    name: "Hoa",
    age: 18,
    address: {
        city: "Hà Nội"
    }
}

function validatePerson(person: any):boolean{
    if (
        person !== null &&
        typeof person.name === 'string' &&
        typeof person.age === 'number' &&
        typeof person.address === 'object'
      ) {
        return true;
      } else {
        return false;
      }
}

console.log(validatePerson(person));