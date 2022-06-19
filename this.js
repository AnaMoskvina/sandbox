// // const x = {
// //     a: 1,
// //     b: 2,
// //     f: function() { return this.a + this.b },
// //     arrow: () => this.a + this.b,
// // }

// // console.log(x.f()) // 3
// // console.log(x.arrow()) // NaN

// const obj = {
//     a: 42,
//     // say: function() {
//     //     console.log(this.a) // 42
//     //     const that = this;
//     //     setTimeout( function () {
//     //         console.log(this.a) // undefined
//     //     }.call(that), 1000) // with call --> 42
//     // }
//     say: function() {
//         console.log(this.a) // 42
//         setTimeout(() => {
//             console.log(this.a) // undefined
//         }, 1000) // with call --> 42
//     }
// }

// obj.say();

const ex = (value, sum) => console.log(sum + value);
const fx = ex.bind(null, 10);

ex(12, 7) // 12 + 7 -> 19
fx(7, 12) // 10 + 7 -> 17