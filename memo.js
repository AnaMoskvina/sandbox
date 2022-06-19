const calculate = (a, b) => {
    return a + b;
}

const memo = (fn) => {

    results = {};
    return (...args) => {
        console.log(results)
        if (results[args]) {
            return results[args];
        } else {
            const newResult = fn(...args);
            results[args] = newResult;
            return newResult;
        }
    }
}

const memoizedCalc = memo(calculate)

console.log(memoizedCalc(1, 2));
console.log(memoizedCalc(2, 2));
console.log(memoizedCalc(1, 2));
