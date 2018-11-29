/**
 * ASYNCHRONOUS ITERATION
 * - Specifies an asynchronous version of the "for-of"loop.
 * - With the "for-await-of" loop allows you to iterate 
 * promises and return them on the order that they were called. 
 */


/**
 * Let's imagine that we have 4 promises that they will 
 * be resolved in different times each one
 *  */
function promise1 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hello promise 1');
            resolve(1);
        }, 2000)
    });
} // resolve in 2 seconds -> third

function promise2 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hello promise 2');
            resolve(2);
        }, 3000)
    });
} // resolve in 3 seconds -> fourth

function promise3 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hello promise 3');
            resolve(3);
        }, 500)
    });
} // resolve in 0.5 seconds -> second

function promise4 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hello promise 4');
            resolve(4);
        }, 200)
    });
} // resolve in 0.2 seconds ->  first


/**
 * And I want to iterate all of them, 
 * but for any reason I need the results on the order that I specified.
 */
async function testAsynchronousIterator() {

    const arrayPromises = [promise1(), promise2(), promise3(), promise4()];

    for await (const item of arrayPromises) {
        console.log(item); 
     }
}

testAsynchronousIterator();
// 1, 2, 3, 4
// Obs: the console.log on each promise will be showed 
// as they are resolved, but they will be returned on the order 
// that they was specified on the array
