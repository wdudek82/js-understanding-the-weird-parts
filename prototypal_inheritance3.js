let person = {
  firstname: 'Default',
  lastname: 'Default',
  greet: function() {
    return 'Hi ' + this.firstname;
  },
};

let john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';

console.log(john.greet());
console.log(john.firstname);