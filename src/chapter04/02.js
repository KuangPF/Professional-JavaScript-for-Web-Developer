function Person() {

}

let person1 = new Person;
Person.prototype.name = 'nameTest';
console.log(typeof(Person.prototype))
console.log(Person.prototype.constructor.prototype);
console.log(Person);
console.log(person1.__proto__);
console.log(Person.prototype.constructor === Person);