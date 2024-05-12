"use strict";
function parseInput(a) {
    if (a === "number") {
        console.log("number");
    }
    else if (a === "boolean") {
        console.log("boolean");
    }
    else if (a === "string") {
        console.log("string");
    }
    else if (a === "null") {
        console.log("null");
    }
    else if (a === "undefined") {
        console.log("undefined");
    }
    else {
        console.log("");
    }
}
parseInput("number");
parseInput("boolean");
parseInput("string");
parseInput("null");
parseInput("udnefined");
