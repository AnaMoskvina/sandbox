function Animal(name) {
    this.name = name
}

Animal.prototype.poo = function() {
    console.log(this.name, ' poo')
}

function Dog(name, type) {
    Animal.call(this, name);
    this.type = type;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.pee = function() {
    console.log(this.name + ' ' + this.type + ' pee')
} 

var dog = new Dog('Kesha', 'korgi');

dog.poo(); // Kesha poo
dog.pee(); // Kesha korgi pee


