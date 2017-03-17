var employee ={
    id : 1,
    greet: function(){
        setTimeout(()=>console.log(this),1000);

    }
};
var getBonus =function(value1=10,value2){
    console.log((value1)+"--"+(value2));
};

let displayColor = function (...colors) {
       for(var i in arguments){
           console.log(arguments[i]);
       }
};
let colors = ['red','green','blue'];
displayColor('red','green','blue');


