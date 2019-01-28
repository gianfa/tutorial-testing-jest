/** Testing wiht Jest
 * 
 * 1. Create a module with one function.
 * 1.1 Remember to export the functions you want to test.
 * 2. Create a file with the same name of the previous module and
 * add '.test' to its name.
 * 3. From a Terminal launch
 * > npm t NAMEOFTHEMODULE
 * 
 * If a error is raised about the command jest not found, check
 * the installation steps:
 * 1. assert that package-lock contains 'jest' as value of 
 * scripts.test .
 * 2. eventually delete the package-lock and type
 * > npm init again
 * 
 * [official Jest site](https://jestjs.io/)
 * [jest cheatsheet](https://devhints.io/jest)
 */

const sum = (a, b) => a + b
const mul = (a, b) => a * b
const sub = (a, b) => a - b
const div = (a, b) => a / b

const https = require('https');
const fetch = require('node-fetch');

const callmebaby = async (x) => { // example of asynchronous function
    return fetch('http://api.icndb.com/jokes/random')
    .then(res => res.json())
    .then(data => x + ', ' + data.value.joke)
};

// console.log( callmebaby() )
module.exports = { sum, mul, sub, div, callmebaby }