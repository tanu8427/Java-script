function  greet( name){
 //console.log(`name  ${name}`)
}
greet("tanu")


//program 2 

function makeTea(teaname){
    return `myTea : ${teaname}`;

}
let greets = makeTea("Massale chai");
// console.log(greets)

//program 3

function ordertea(teatype){
    function confermOrder(){
        return `Oder conferm for chai`
    }
      return confermOrder()

}
console.log(ordertea("massal chai"))