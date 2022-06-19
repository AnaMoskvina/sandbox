const arr  = [1, 8, 6, 29, 0];

const getSortedArr = (arr) => {
    // const copyArr = [...arr]

    for (let i = 0; i < arr.length; i++) {
        let noSwap = true;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                // let biggest = arr[i];
                // arr[i] = arr[j]
                // arr[j] = biggest;
                [arr[i], arr[j]] = [arr[j], arr[i]]
                noSwap = false;
            }
        }

        if (noSwap) break;
    }

    return arr;
}

console.log(getSortedArr(arr));