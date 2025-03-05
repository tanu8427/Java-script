function Person(name){
    this.name = name;
}
Person.prototype.greet = function(){ 
    console.log(`My name is ${this.name}`);
}
let hitesh = new Person("Tanu");
tanu.greet();
