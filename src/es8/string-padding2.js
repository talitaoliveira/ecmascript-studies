/**
 * STRING PADDING
 * - When you need a string to reach a specific length.
 * - Two ways to add characters: padStart() and padEnd()
 * - Basic usage:
 * 
 * padStart(finalLength, padString)
 * padEnd(finalLength, padString)
 */

let languages = ['Javascript', 'PHP', 'Python', 'Java'];

// padStart()
let languagesPadStart = languages.map( lang => lang.padStart(20, '-'));
console.log(languagesPadStart);
/* 
["----------Javascript", 
"-----------------PHP",
"--------------Python",
"----------------Java"]
*/


// padEnd()
let languagesPadEnd = languages.map( lang => lang.padEnd(20, '-'));
console.log(languagesPadEnd);
/* 
["Javascript----------",
"PHP-----------------",
"Python--------------",
"Java----------------"]
*/