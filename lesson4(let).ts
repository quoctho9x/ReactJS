function greetPersonLet(name) {
    let bien;
    let ten :string ='quoc tho';

    if (name == 'quoctho') {
        bien = `ten cua ban la : ${ten}`;
    } else {
        bien = 'day khong phai la nguyen quoc tho';
    }
    console.log(bien);

}
greetPersonLet('quoctho');
testLet();
function testLet(){
    var a = 1;
    var b = 2;
    if(a ===1){
        let b =10;
        a =20;
        console.log(a);
        console.log(b);
    }
    console.log(a);
    console.log(b);
}

for (var i=1;i <5;i++){
    setTimeout(function(){
        console.log(i);
    },1000);
}