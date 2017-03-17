var employees = ['a','b','c'];//day la array
let[em2]= employees; //lay gia tri ra tung bien
//console.log(employees);

/*object*/
let employ = {//day la object
    fname:'quoc',
    lname:'tho',
    age:'24'
};
let{fname: f,lname: l ,age: a}= employ;//lay gia tri ra tung bien

console.log(f);
console.log(l);
console.log(a);


/*dddddddddddd*/
let employ1 = [{//day la 1 array object
    fname:'quoc',
    lname:'tho',
    age:'24'
},{
    fname:'tran',
    lname:'nam',
    age:'21'
},{
    fname:'le',
    lname:'thai',
    age:'23'
},{
    fname:'duc',
    lname:'ngoc',
    age:'14'
},];
var emp = function(array){//
    for(let i in array){
        let{fname: f,lname: l ,age: a}= array[i];//lay gia tri ra tung bien
        console.log(f);
        console.log(l);
        console.log(a);
    }
};
emp(employ1);
