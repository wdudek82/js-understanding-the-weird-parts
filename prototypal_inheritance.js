let person = {
  firstname: 'Default',
  lastname: 'Default',
  getFullName: function() {
    return this.firstname + ' ' + this.lastname;
  }
};

let john = {
  firstname: 'John',
  lastname: 'Doe',
};

// don't to this EVER! for demo purposes only!!!
// john inherits from person
john.__proto__ = person;
console.log(john.getFullName());

for (let prop in john) {
  if (john.hasOwnProperty(prop)) {
    console.log(prop + ': ' + john[prop]);
  }
}

let jane = {
  firstname: 'Jane',
  address: '111 Main St.',
  getFormalFullName: function() {
    return this.lastname + ', ' + this.firstname;
  },
};

jane.__proto__ = person;
console.log(jane.getFullName());

let jim = {
  getFirstName: function() {
    return firstname;
  },
};

// combines all props and methods and assign them to john
// _.extend(john, jane, jim);

Object.assign(john, jane, jim);

console.log(john);