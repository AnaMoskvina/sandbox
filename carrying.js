// const add = (arg) => {
//     let sum = 0;
//     if (!arg) {
//         return sum;
//     }
//     return (arg) => arg + sum;
// };

// // add(1)(2)(3)(); // 6

// // add() // 0

// console.log(add(1)(2)(3)()) // () => 1


// const sum = (a) => (b) => a + b
// console.log(sum(3)(4)); // sum

const sum1 = (arg) => {
    let sum = 0;
    if (!arg) return sum;
    return (arg) => arg + sum
}

console.log(sum1(1)(3));