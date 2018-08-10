// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (false) {
//       resolve('success!');
//     }
//     reject('failed!');
//   }, 1000);
// });

const getData = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve('success');
      }
      reject('failed!');
    }, 1000);
  })
};

getData(false)
  .then(data => console.log(data))
  .catch(err => console.log(err));
