type shape = {
    type: string;
    side: number
}
let circle: shape = {
    type: "circle",
    side: 2
}

let square = {
    type: "square",
    side: 3
}

function calculateArea(a: shape): any{
    if(a.type === "square"){
        return a.side**2
    }
    if(a.type === "circle"){
        return a.side**2 * Math.PI 
    }
}
console.log(calculateArea(square));
console.log(calculateArea(circle));
