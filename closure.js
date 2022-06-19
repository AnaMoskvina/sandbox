const inc = (() => {
    let counter = 0;
    return () => counter += 1;
})()

console.log(inc()); // 1
console.log(inc());  // 2