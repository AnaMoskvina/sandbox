// Ваша задача состоит в том, чтобы создать функцию, которая может принимать любое неотрицательное целое число в качестве аргумента и возвращать его с цифрами в порядке убывания. По сути, переставьте цифры, чтобы получить максимально возможное число.assert.strictEqual(descendingOrder(0), 0)
// assert.strictEqual(descendingOrder(1), 1)
// assert.strictEqual(descendingOrder(111), 111)
// assert.strictEqual(descendingOrder(15), 51)
// assert.strictEqual(descendingOrder(1021), 2110)
// assert.strictEqual(descendingOrder(123456789), 987654321)

// const descendingOrder = (num) => {
//     const arr = String(num).split('');
//     return +arr.sort((a, b) => b - a).join('');
// }

// console.log(descendingOrder(15));

// Завершите решение, чтобы оно возвращало true, если первый переданный аргумент (строка) заканчивается вторым аргументом (тоже строкой).

// Test.assertEquals(solution('abcde', 'cde'), true)
// Test.assertEquals(solution('abcde', 'abc'), false)

// const solution = (str1, str2) => {
//     const lenStr2 = str2.length * -1;
//     return str1.slice(lenStr2) === str2;
// }

// console.log(solution('abcde', 'abc')

// Добро пожаловать. В этой ката вас просят возвести в квадрат каждую цифру 
//числа и соединить их. Например, если мы пропустим через функцию 9119, получится 811181, потому что 92 – это 81, а 12 – это 1.

// const test = (num) => {
//     const arr = String(num).split('');
//     const newArr = [];
//     arr.forEach(num => {
//         newArr.push((+num) ** 2)
//     });
//     return +newArr.join('')
// }

// console.log(test(9119))

// Нарциссическое число – это положительное число, представляющее собой сумму собственных цифр, 
// каждая из которых возведена в степень количества цифр в данном основании. 
// В этом Ката мы ограничимся десятичными числами (с основанием 10).

// it( "should find small numbers are all narcissistic", function() {
//     Test.assertEquals(narcissistic( 7 ), true, "7 is narcissistic" );
//     });
    
//     it( "should find these numbers are narcissistic", function() {
//     Test.assertEquals(narcissistic( 371 ), true, "371 is narcissistic" );
//     });

// const narcissistic = (num) => {
//     const numDigits = String(num).length;
//     const digits = String(num).split('').map(digit => +digit);
//     let sum = 0;
//     digits.forEach(digit => {
//         sum += digit ** numDigits;
//     })
//     return sum === num;
// }

// console.log(narcissistic(1652))