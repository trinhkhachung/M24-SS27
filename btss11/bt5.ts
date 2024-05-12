class a{
    private a: number;
    protected b: number;
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }
}
class b extends a{
    constructor(a: number, b: number) {
        // private và protected đều không thể truy cập thông thường
        super(a, b);
        this.a = a; // private không thể đc kế thừa
        this.b = b; // protected có thể được kế thừa
    }
}