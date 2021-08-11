class Base {
    no1: number;
    no2: number;
    
    constructor(x : number , y : number) {
        console.log("Base constructor");
        this.no1 = x;
        this.no2 = y;
    }

    fun() {
        console.log("Inside fun function");
        console.log(this.no1);
        console.log(this.no2);
    }
}

class Derived extends Base {
    value: number;
    
    constructor(a: number, b: number, c: number) {
        super(a, b);
        console.log("Derived class constructor");
        this.value = c;
    }
    
    gun() {
        console.log("Inside gun function");
        console.log(this.value);
    }
}

var dobj: Derived = new Derived(11, 21, 33);

dobj.fun();
dobj.gun();