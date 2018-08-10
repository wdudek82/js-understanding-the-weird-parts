function makeGreeting(lang) {
  return function(firstName, lastName) {
    console.log('foo', )
  }
}

let person = {
  firstname: 'John',
  lastname: 'Doe',
  getFullName: function() {
    let fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
}

let logName = function(lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments:', lang1, lang2);
} //.bind(person);

logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']);


// Function Borrowing
let person2 = {
  firstname: 'Jane',
  lastname: 'Arnice',
}

console.log('apply:', person.getFullName.apply(person2));


// Function Currying
function multiply(a, b) {
  return a * b;
}

let multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(5));

let arr1 = [1, 2, 3, 4];

function mapForEach(arr, fn) {
  return arr.map(e => fn(e));
}

console.log(mapForEach(arr1, e => e * 6));

let checkPastLimit = function(limiter, item) {
  return item > limiter;
}

let newCheckPastLimit = (limiter) => checkPastLimit.bind(this, limiter);

let arr4 = mapForEach(arr1, newCheckPastLimit(2));
console.log(arr4);