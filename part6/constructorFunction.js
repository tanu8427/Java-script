// program -1 
function Car(make, model){
 
   this.make = make;
   this.model = model;


}
let myCar = new Car("tata","harrier");
// console.log(myCar)
let newCar = new Car("Toyota","urban crusier" );
// console.log(newCar)



// program -2 
function Tea1(type){
    this.type = type;

    this.discribe = function(){
        return`this is cup of ${this.type}`
    };
}
let lemonTea = new Tea1("lemon-Tea")
//console.log(lemonTea.discribe());


// the below program is  the modern Approach by js ES6+ of above program
class Tea {
    constructor(type) {
        this.type = type;
    }

    describe() {
        return `This is a cup of ${this.type}.`;
    }
}

let lemonTea1 = new Tea("lemon-Tea");
let massalaTea = new Tea("Massala-Tea");
console.log(lemonTea1.describe());
console.log(massalaTea.describe());




// Program -3
function Animal(Species){ //constructor function
    this.Species = Species;   // object assign 
}
Animal.prototype.sound =function(){             // Method inside the object  
    return `${this.Species} Make an sound`;
};
let dog = new Animal("Dog");            //object create 
console.log(dog.sound());    // calling Method


// program -4

function SuperCar(brand, model, year){
    this.brand = brand ;
    this.model = model;
    this.year  = year;
}
SuperCar.prototype.details = function(){
    return`This is a ${this.brand} ${this.model} ${this.year}`;
}
let   Car1 = new SuperCar("Tata", "Curve", 2024);
let   Car2 = new SuperCar("Tata", "Sfari", 2024);
//console.log(Car1.details());
//console.log(Car2.details());



// Program -5  this program  shown the constructor error
function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name ;
}  

let person1 = new Drink("tanu");
let person2 =  new Drink("Govind");         // the the new keyword error will be occur 