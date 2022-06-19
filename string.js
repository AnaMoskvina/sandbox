const getFirstShortest = (str) => {
    // const words = str.split(' ');
    // let shortest = words[0];
    // words.forEach(word => {
    //     if (word.length < shortest.length) {
    //         shortest = word
    //     }
    // })
    // return shortest
 
    return str.split(' ').sort((a, b) => a.length < b.length)
}

console.log(getFirstShortest('The shortest word in sentence'))

console.log(this)