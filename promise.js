// const firstPromise = new Promise(function(resolve) {
//  return resolve("first"); 
// });

// const secondPromise = new Promise(function(resolve) {
//  resolve("second"); 
// });

// const doAllThings = firstPromise.then(function() {
//  return secondPromise; 
// });

// doAllThings.then(function(result) {
//  console.log(result); 
// }); // second

// let promise = new Promise(function(resolve, reject) {
//     resolve(1);
  
//     setTimeout(() => resolve(2), 1000);
//   });
  
//   promise.then(alert);


// function delay(ms) {
//     return new Promise((res) => setTimeout(() => {res()}, ms))
//   }
  
//   delay(3000).then(() => alert('runs after 3 seconds'));

// new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       throw new Error("Whoops!");
//     }, 1000);
//   }).catch(alert);

// Promise.all([
//     new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//     new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
//     new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
//   ]).then((res) => console.log(res)); // [1,2,3]



// console.log('Script function 1');

// const p = new Promise((resolve) => {
// 	resolve('Promise 1');
// }).then(resolvedMessage => {
// 	console.log(resolvedMessage);
// 	return 'Promise 2';
// }).then(resolvedMessage => {
// 	console.log(resolvedMessage);
// 	return 'Promise 3';
// }).then(resolvedMessage => {
// 	console.log(resolvedMessage);
// });

// setTimeout(() => console.log('Callback 1'));

// console.log('Script function 2');

// setTimeout(() => new Promise(resolve => setTimeout(() => console.log('Callback 2'))));

// setTimeout(() => console.log('Callback 3'));

// console.log('Script function 3');

// sf1, sf2, sf3, p1, p2, p3, cb1, cb3, cb2