function  outer(){  
    let counter=4;
    return function(){
        counter++;
        return counter;
    };
}
let increment = outer();
console.log(increment()); // 5  ouput
console.log(increment()); // 6