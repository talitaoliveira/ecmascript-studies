/**
 * REST PROPERTIES
 * Using the REST operator "..." to extract properties from an object
 * */


const { website, ...moreInfo } = {
    website: 'http://rec.jsday.com.br/',
    day: 1,
    month: 12,
    year: 2018,
    location: 'Faculdade Imaculada conceição'
};

console.log(website); // http://rec.jsday.com.br/
console.log(moreInfo); // {day: 1, month: 12, location: "Faculdade Imaculada conceição"}
