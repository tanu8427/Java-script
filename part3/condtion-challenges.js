//cheking if a number is greater then another number:


let num1 = 10
let num2 = 8

if(num1 > num2){
    console.log("yes it is greater than num2")
}
else{
    console.log("not greater then num2")
}




//checking  if a string is equal to another string

let username = "Tanu"
let anthername = "Tanu"

if(username == anthername){
    console.log("yes both name are equal")
}
else {
    console.log("both name are different")
}

//checking a variable is number or not 

let num = 3

if(typeof num === 'number'){
    console.log("yes the varibale is number")
}
else{
    console.log("The Given variable is not an number")
}

//check the array is empty or not 

let items = ["tanu"]
console.log(items.length)

if(items.length === 0){
    console.log("Array is Empty")
} 
else {
    console.log("Given array is not Empty")
}

/* you have n=array named "popularTeas" containing "green tea", "oolong Tea", and "chai".
 creater a soft copy of this array named Softcopy.
*/

let popularTeas = [ 
    "green tea",
    " oolong tea ",
    "chai"

]
//copy of array 

// let var1= 5
// let var2 = var1
// console.log(var2)



// make an hard copy of an array 
let topcities = [ "mumbai" , "Delhi", "kanpur", "noida" ]
let highcities = [topcities]
topcities.pop()
console.log(highcities)


let arr = [1, 2, 3];
arr.push(4);
arr.pop();
console.log(arr);
