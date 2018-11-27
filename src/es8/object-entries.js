/**
 * OBJECT.ENTRIES()
 * - Returns an array with all property and values of the object as an array of [key, value] pairs
 */

const jsDay = {
    website: 'http://rec.jsday.com.br/',
    day: 1,
    month: 12,
    year: 2018,
    location: 'Faculdade Imaculada conceição'
};

console.log( Object.entries(jsDay) )
// [ ['website', 'http://rec.jsday.com.br/'], ['day', 1], ['month', 12], ['year', 2018], ['location', 'Faculdade Imaculada conceição'] ];