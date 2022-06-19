// const words = ['banana', 'grapefruit', 'banana', 'grapefruit', 'banana', 'orange', 'banana'];
// // 1 - unique
// // 2 - sorted by frequency

// const getSortedArr = (arr) => {
//     const copyArr = [...arr];
//     const fruits = {};

//     copyArr.forEach(item => {
//         fruits[item] ? fruits[item] = fruits[item] + 1 : fruits[item] = 1
//     })

//     return Object.entries(fruits).sort((a, b) => a[1] > b[1]).map(([item, _]) => item)

//     // { banana: 4, grapefruit: 2, orange: 1}
//     // [ [banana, 4], [grapefruit, 2], [orange, 1] ]
// }

// console.log(getSortedArr(words))


// const multiplyByTwo = (...args) => args.map(arg => arg * 2)

// console.log(multiplyByTwo(1,2,3,4,5,6,7))