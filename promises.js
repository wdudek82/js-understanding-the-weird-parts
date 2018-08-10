function addExtra(price) {
  return new Promise((resolve, reject) => {
    console.log('Promise', price);
    setTimeout(() => {
      if (price > 2000 || !price) {
        reject('Price cannot exceed 2000');
      }
      resolve(price + 1000);  
    }, 1000);
  })
}

// function addExtra(price, callback) {
//   setTimeout(() => {
//     callback(price + 10);
//   }, 1000);
// }

// function print(content) {
//   console.log(content);
// }

// addExtra(1000)
//   .then((res) => addExtra(res), (err) => console.log(err))
//   .then((res) => addExtra(res), (err) => console.log(err))
//   .then((res) => addExtra(res), (err) => console.log(err))
//   .then((res) => addExtra(res), (err) => console.log(err));


let price = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(100)
  }, 1000);
});

let slowPrice = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject('Ooops! Something went wrong!');
    resolve(120)
  }, 2000);
});

function greet() {
  return 'Hello!';
}

const arr = [price, slowPrice, 200, greet()];
const promises = [price, slowPrice];

Promise.race(promises)
  .then((resolvedPromises) => console.log(resolvedPromises))
  .catch(err => console.log(err));
