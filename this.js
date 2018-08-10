console.log(this);

function a() {
  const insideA = 'foo';
  console.log('inside a:', this);
}

a();

const Person = function(name) {
  this.name = name;

  this.greet = function() {
    console.log(`Hello ${this.name}`);
  }

  this.testThis = function() {
    console.log(this);
  }

  this.testThis2 = () => {
    console.log(this);
  }
}

const c = {
  name: 'The c object',
  log: function() {
    console.log(this);

    console.log('log function', this);

    let setName = () => {
      console.log('setName function', this);
    }

    setName();
  },
  log2: () => console.log(this),
}

const person = new Person('Wojtek');

console.log('name:', this.name);
console.log('greet:')
person.greet();

person.testThis();
person.testThis2();

c.log();
c.log2();