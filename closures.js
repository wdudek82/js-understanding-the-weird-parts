function greet(whattosay) {
  return function(name) {
    console.log(whattosay + ' ' + name);
  }
}

const hola = greet('Hola');
const greetings = greet('Greetings and salutations')
hola('Tony');
greetings('Tony');