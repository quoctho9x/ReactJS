class Person{
    a= 'quoctoh';
    b = ()=>{return 'day la phuong thuc cua person'};
    constructor(public name){
        this.a = name;
       // console.log(name + ' Person constructor');
    }
    getId(){
        return this.a;
    }
}
let p1 = new Person('quoc tho');
console.log(p1.getId());
console.log(p1.name);
/*

class Employee extends Person{
    constructor(name){
        super(name);
        console.log(name + ' Employee constructor');
    }
    getfn(){
        return super.getId();
    }
}
let p2 = new Employee('admin');
console.log(p2.getfn());*/
