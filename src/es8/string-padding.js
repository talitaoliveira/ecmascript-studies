/**
 * STRING PADDING
 */

// padStart()

// padEnd()

// EXAMPLE
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