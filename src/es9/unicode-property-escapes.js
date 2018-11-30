/**
 * UNICODE PROPERTY ESCAPES
 * \p{} and negation using \P{}
 * Unicode has a set of properties and defines different 
 * characters encodings. Using this feature you can match 
 * characters by specifying the name of the set of characters.
 */

// boolean property that checks if the string is lowercase
console.log(/^\p{Lowercase}+$/u.test('jsdayrecife')); // true

// by using \P{} you can use the negative way, in this case 
// that don't match to a lowercase string
console.log(/^\P{Lowercase}+$/u.test('jsdayrecife')); // false


// You can verify emojis too.
// by using boolean property that checks if the string is emoji
console.log(/^\p{Emoji}+$/u.test('hello')); // false
console.log(/^\p{Emoji}+$/u.test('⭐')); // true
