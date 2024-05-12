function squareRoot(a: number|number[]):void{
    if(Array.isArray(a)){
        let a1 = a.map(item => item * 2);
        console.log(a1);
    }
    if(typeof(a) === "number"){
        console.log(a * 2);
    }
}
squareRoot(5);
squareRoot([5,6]);