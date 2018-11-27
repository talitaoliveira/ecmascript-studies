/**
 * INCLUDES
 * - Check in array if contains any element
 * - More readeable syntax than .indexOf()
 */

let listNumbers = [1, 2, 3, 4, 5, 6];

//---- When the element is in the list
// using indexOf
console.log( listNumbers.indexOf(5) ); // 4
// using includes
listNumbers.includes(5); // true


//---- When the element is not in the list
// using indexOf
listNumbers.indexOf(9); // -1
// using includes
listNumbers.includes(9); // false