const getFactorial = (number) => {
    if (number === 0 || number === 1) return 1;
    return getFactorial(number - 1) * number;
}

// f = n * (n - 1) * ...
// !1 = 1, !0 = 1 - base case

console.log(getFactorial(50));