/**
 * SPREAD PROPERTIES
 * Using the SPREAD operator "..." to create new objects with properties
 * of the object passed after the spread operator
 * */


const eventData = { website: 'http://rec.jsday.com.br/', location: 'Faculdade Imaculada conceição' };

const eventDay = { day: 1, month: 12, year: 2018 }

const jsDay = { ...eventData, ...eventDay }

console.log(jsDay); 
/* 
{ day: 1
 location: "Faculdade Imaculada conceição"
 month: 12
 website: "http://rec.jsday.com.br/"
 year: 2018 }
*/