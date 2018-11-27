/**
 * INCLUDES
 * - Check in array if contains any element
 * - More readeable syntax than .indexOf()
 */

let listNumbers = [1, 2, 3, 4, 5, 6];

// using indexOf
//---- When the element is in the list
listNumbers.indexOf(5); // 4
//---- When the element is not in the list
listNumbers.indexOf(9); // -1


// using includes
//---- When the element is in the list
listNumbers.includes(5); // true
//---- When the element is not in the list
listNumbers.includes(9); // false