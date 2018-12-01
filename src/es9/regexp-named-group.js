// WHOUT NAMED GROUPS
// const RE_DATE = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;

// const matchObj = RE_DATE.exec('2018-12-01');

// console.log(matchObj);
// /**
//  * [
//  * 0: "2018-12-01",
//  * 1: "2018",
//  * 2: "12",
//  * 3: "01",
//  * groups: undefined,
//  * input: "2018-12-01"
//  * ]
//  */

// const year = matchObj[1]; // 2018
// const month = matchObj[2]; // 12
// const day = matchObj[3]; // 31


// WITH NAMED GROUPS

const RE_DATE = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;

const matchObj = RE_DATE.exec('2018-12-01');

console.log(matchObj);
/**
 * [
 * 0: "2018-12-01",
 * 1: "2018",
 * 2: "12",
 * 3: "01",
 * groups: {
 *    year: 2018,
 *    month: 12,
 *    day: 01,
 * },
 * input: "2018-12-01"
 * ]
 */

const year = matchObj.groups.year; // 2018
const month = matchObj.groups.month; // 12
const day = matchObj.groups.day; // 01