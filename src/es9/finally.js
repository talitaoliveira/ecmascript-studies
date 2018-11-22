/**
 * PROMISE.PROTOTYPE.FINALLY()
 * - Always executed
 * - Allow to execute some code if the promise is successful or not successful
 */

// example
fetch('https://randomuser.me/api/?results=1')
  .then(data => data.json())
  .then(jsonData => console.log(jsonData))
  .catch(error => console.error(error))
  .finally(() => console.log('finished'))