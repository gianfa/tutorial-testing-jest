/** ### JEST TEST TUTORIAL ###
 * 
 * This is a little getting strarted to fast get into JEST basics for Node testing.
 * Here is the index of the topics, organized as short tutorials that you can execute
 * readily, simply uncommenting the lines below the "TUTORIAL" introduction section.
 *  
 *    0. Create a TEST
 *    1. Create a real test
 *    3. Create many tests!
 *    4. Make a complex test
 *    5. Tidy up your test
 *    6. DESCRIBE your many tests
 *    7. Please AWAIT for me
 * 
 * 
 * @ref: https://jestjs.io/
 * @cheatsheet: https://devhints.io/jest
 */


/** TUTORIAL 0: Create a TEST
 * Starting from a SUM function,
 * SUM(1,1) I would expect it returns 2,
 * thus all I have to do is to write it,
 * intuitively....
 */
const { sum, mul, sub, div } = require("./provatest")

test("Very useful test", () => {
  
})
/* 
 I bet it passed... well, we ran a test, but we actually didn't (👏).
 We need to put inside the callback a function to execute,
 in order to run test it.
*/


/** TUTORIAL 2: Create a real test
 * Starting from a SUM function,
 * SUM(1,1) I would EXPECT it returns 2,
 * thus all I have to do is to write it,
 * intuitively....
 */
// const { sum, mul, sub, div } = require("./provatest")

// test("Adding 1 + 1 equals 2", () => {
//   expect(sum(1, 1)).toBe(2)
// })

// /** TUTORIAL 3: Create many tests!
//  * 
//  */
// const { sum, mul, sub, div } = require("./provatest")

// test("Adding 1 + 1 equals 2", () => {
//   expect(sum(1, 1)).toBe(2)
// })
// test("Multiplying 1 * 1 equals 1", () => {
//   expect(mul(1, 1)).toBe(1)
// })
// test("Subtracting 1 - 1 equals 0", () => {
//   expect(sub(1, 1)).toBe(0)
// })
// test("Dividing 1 / 1 equals 1", () => {
//   expect(div(1, 1)).toBe(1)
// })

/** TUTORIAL 4: Make a complex test
 * Now let's test two functions at once.
 * Maybe you need to do it in a pipeline, if you
 * want to ensure it works.
 * In order to do it we will instantiate a couple of
 * variables, _a_ and _b_.
 */
// const { sum, mul, sub, div } = require("./provatest")

// const a = 1;
// const b = 1;
// test("Adding 1 + 1 equals 2", () => {
//   const summa = sum(1,1);
//   expect(summa).not.toBeNaN(); // first check
//   expect(mul(3,summa)).toBe(6); // second check
// })

/** TUTORIAL 5: Tidy up your test
 * Now that we know hoe to run a (or many) test,
 * Maybe we'd like to add a description to our test
 * group. Jest let you do it with an easy command
 *  "describe" (surprise surprise!), on a single test
 * for now.
 */
// const { sum, mul, sub, div } = require("./provatest")

// describe('Let\'s test a single feature...', () => {
//   test("Adding 1 + 1 equals 2", () => {
//     expect(sum(1, 1)).toBe(2)
//   })
// })

/** TUTORIAL 6: DESCRIBE your many tests
 * Now that we know hoe to run a (or many) test,
 * Maybe we'd like to add a description to our test
 * group. Jest let you do it with an easy command
 *  "describe" (surprise surprise!), on a single test
 * for now.
 */
// const { sum, mul, sub, div } = require("./provatest")

// const a = 1;
// const b = 1;
// describe('Test a pipeline', () => {
//   test("Adding 1 + 1 equals 2", () => {
//     const summa = sum(1,1);
//     expect(summa).not.toBeNaN(); // first check
//     expect(mul(3,summa)).toBe(6); // second check
//   })
// })

// describe('Test other features...', () => {
//   test("Adding 1 + 1 equals 2", () => {
//     expect(sum(1, 1)).toBe(2)
//   })
//   test("Multiplying 1 * 1 equals 1", () => {
//     expect(mul(1, 1)).toBe(1)
//   })
//   test("Subtracting 1 - 1 equals 0", () => {
//     expect(sub(1, 1)).toBe(0)
//   })
// })

// describe('Last one', () => {
//   test("Dividing 1 / 1 equals 1", () => {
//     expect(div(1, 1)).toBe(1)
//   })
// })


/** TUTORIAL 7: CALL me BACK when you have DONE
 * What about callbacks? We all know what hell is the
 * callback world sometimes, so how can we deal with them
 * in testing stage?
 * Simply use await/async and wait for jest to resolve your Promise!
 */
// const { sum, mul, sub, div, callmebaby } = require("./provatest")

// const a = 1;
// const b = 1;
// describe('Test a pipeline', () => {
//   test("Adding 1 + 1 equals 2", () => {
//     const summa = sum(1,1);
//     expect(summa).not.toBeNaN(); // first check
//     expect(mul(3,summa)).toBe(6); // second check
//   })
// })

// describe('Async testing..', () => {
//   test('Getting a Chuck Norris joke', async () => {
//     await expect(callmebaby(1))
//      .resolves
//      .toMatch(/Chuck Norris/)
//      .catch(e => console.log('Try to run it again! May be a joke not mentioning Chuck ;) ') );
//   });
// })



