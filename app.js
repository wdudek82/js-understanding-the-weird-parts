function b() {
  console.log(myVar);
}

function a() {
  function c() {
    console.log(myVar);
  }

  var myVar = 2;
  b();
  c();
}

console.log('var:', myVar);
var myVar = 1;
console.log('var:', myVar);

// console.log('let:', myLet);
let myLet = 7;
console.log('let:', myLet);

a();

for (var i = 0; i < 5; i++) {
  ((i) => setTimeout(() => console.log('num:', i), 1000))(i);
}


// Associativity
var a = 2,
  b = 3,
  c = 4;

a = b = c;

console.log('a', a);
console.log('b', b);
console.log('c', c);


// Comparison operator
console.log(1 < 2 < 3); // true
console.log(1 > 2 > 3); // false

// < has left-to-right associativity
console.log(3 < 2 < 1); // true?
// due to associativity and coercion
// false < 1 === 0 < 1 === true


let x = 1;
let y = 1;

console.log('x x', Object.is(x, x));
console.log('x y', Object.is(x, y));

console.log(libraryName);

const person = {};

person.firstName = 'Tony';
person.lastName = 'Alicea';

console.log(person.firstName);
console.log(person);

const items = {
  knife: 1,
  shield: 1,

  clear(item) {
    console.log('clearing ' + item);
  }
}

const warrior = Object.assign(person, items);

warrior.clear('a sword');

console.log(warrior);

2 + 3;