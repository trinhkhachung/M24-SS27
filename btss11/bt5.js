"use strict";
class a {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}
class b extends a {
    constructor(a, b) {
        // private và protected đều không thể truy cập thông thường
        super(a, b);
        this.a = a; // private không thể đc kế thừa
        this.b = b; // protected có thể được kế thừa
    }
}
