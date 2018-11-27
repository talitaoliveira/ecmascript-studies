/**
 * OBJECT.VALUES()
 * - Returns an array with all values of the Object's properties
 */

const jsDay = {
    website: 'http://rec.jsday.com.br/',
    day: 1,
    month: 12,
    year: 2018,
    location: 'Faculdade Imaculada conceição'
};

console.log( Object.values(jsDay) )
// ['http://rec.jsday.com.br/', 1, 12, 2018, 'Faculdade Imaculada conceição'];