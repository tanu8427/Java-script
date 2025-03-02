// .................obejct............// 

// let obj = {}

// console.log(obj);
// console.log(typeof obj)

// let username ={
//     firstName:"Tanu",
//     isloggedin: true,
//     lastName: "Kumar"

// }
// console.log(username)


const username={
    Firstname: "tanu",
    isLoggendin: true
}
username.Firstname="Mr.Tanu" // in const types it does not give an error because here it uses the reference
username.Lastname = "Kumar"
console.log(username.Lastname)
console.log(username)




// let today = new Date();
// console.log(today);


 //.......Array.....//

// let  name = [1,2,3,4, "tanu","rahul"]
// console.log(name[2])




//.........Type-conversion.....//


//...1..Emplicit-conversion..//

// console.log("1"+1);
// console.log(1+"1");


// let isvalue = true;
// console.log((isvalue)+1);

//...2..Explicit-conversion..//

let value ="3"
console.log(typeof Number(value))

let num =2
console.log( String(num))

// const name = "shantu"
// name = "tanu "
// console.log(name)