/**
 * STRING PADDING
 * - When you need a string to reach a specific length.
 * - Two ways to add characters: padStart() and padEnd()
 * - Basic usage:
 * 
 * padStart(finalLength, padString)
 * padEnd(finalLength, padString)
 */

let lang1 = 'Javascript';
let lang2 = 'PHP';
let lang3 = 'Python';
let lang4 = 'Java';

let finalLength = 20;

// padStart()
let allLanguangesPadStart = `
${lang1.padStart(finalLength, '-')}
${lang2.padStart(finalLength, '-')}
${lang3.padStart(finalLength, '-')}
${lang4.padStart(finalLength, '-')}`;

console.log(allLanguangesPadStart);
/**
----------Javascript
-----------------PHP
--------------Python
----------------Java
 */



// padEnd()
let allLanguangesPadEnd = `
${lang1.padEnd(finalLength, '-')}
${lang2.padEnd(finalLength, '-')}
${lang3.padEnd(finalLength, '-')}
${lang4.padEnd(finalLength, '-')}`;

console.log(allLanguangesPadEnd);
/**
Javascript----------
PHP-----------------
Python--------------
Java----------------
 */


/** 
 * ⭐️ BONUS EXAMPLE ⭐️
 * */
const firstLine = '=======================================================';
const lastLine = firstLine;
const lenghtLines = firstLine.length;

let welcomeText = '⭐️ Hello String Padding! ⭐️';
const lengthText = welcomeText.length;
const leftToComplete = lenghtLines - lengthText;
const halfComplete = leftToComplete/2;

welcomeText = welcomeText.padStart(lenghtLines-halfComplete, '~');
welcomeText = welcomeText.padEnd(lenghtLines, '~');

console.log(`
${firstLine}
${welcomeText}
${lastLine}
`);

/**

=======================================================
~~~~~~~~~~~~~~⭐️ Hello String Padding! ⭐️~~~~~~~~~~~~~~
=======================================================

 */