//program 1

let computer = {cpu: 12};
let lenovo = {screen:"HD",
    __proto__ : computer
};
let TomHardware  = {}
console.log(`computer`,computer.__proto__)
console.log(`lenovo`,lenovo.__proto__)


//program 2

let genricCar = {tyres: 4}


let tesla = {
    driver : "AI"
}
Object.setPrototypeOf(tesla, genricCar);
console.log(`tesla`, tesla)
console.log(`tesla`, genricCar);
console.log(`tesla`, tesla.tyres);
console.log(`tesla`,Object.getPrototypeOf(tesla)) // this is the better approach to get all property