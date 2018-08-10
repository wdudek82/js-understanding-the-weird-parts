let a = {};
let b = function() {
  console.log('foo');
};
let c = [];

// console.log(a, b, c);

function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;

  this.greet = function() {
    console.log('Hello, my name is ' + this.firstname + ' ' + this.lastname);
  };
}

Person.prototype.getFullName = function() {
  return this.firstname + ' ' + this.lastname;
};

let john = new Person('Jaś', 'Fasola');
let jane = new Person('Jane', 'Doe');

console.log(john);
// john.greet();

console.log(john.getFullName());
console.log(jane.getFullName());

Person.prototype.getFormalName = function() {
  return 'Formal name';
}

console.log(john);

// class Person2 {
//   static add(x, y) {
//     return x + y;
//   }
// }

// console.log(Person2.add(2, 3));

Number.prototype.isPositive = function() {
  return this > 0;
}
