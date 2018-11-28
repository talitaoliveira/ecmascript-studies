/**
 * TRAILLING COMMAS
 * It's a minor update that allows you to leave a 
 * comma after the last parameter on a function 
 * or the last property on objects
 * */

// when you need to add some new property you have to "touch" in two lines
// line 6 to add a comma and add new line at 7 with the new property
let myObjectWithoutTC1 = {
    property1: "value1",
    property2: "value2",
    property3: "value3"
}

// this way avoid touch in two lines (but, it's weird! In my opinion)
// when you need to add new property, you just need to touch in one line (7)
let myObjectWithoutTC2 = {
    property1: "value1"
    , property2: "value2"
    , property3: "value3"
}

// the "solution": the trailling comma
// when you need to add new property, you just need to touch in one line (7)
let myObjectWithTC = {
    property1: "value1",
    property2: "value2",
    property3: "value3",
}
		
