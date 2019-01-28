# JEST TEST TUTORIAL (unofficial)
<img align="center" src="https://www.learnstorybook.com/logo-jest.png" alt="JEST logo" width="90">   
A sweet introduction to Jest use, to get started in minutes

This is a little getting strarted to fast get into JEST basics for Node testing.
Here is the index of the topics, organized as short tutorials that you can execute
readily, simply **uncommenting** the lines below the "TUTORIAL" introduction section inside _provatest.test.js_ .

1. Create a TEST
2. Create a real test
3. Create many tests!
4. Make a complex test
5. Tidy up your test
6. DESCRIBE your many tests
7. Please AWAIT for me

## Starting from zero

1. Create a module with one function.
1.1. Remember to export the functions you want to test.
2. Create a file with the same name of the previous module and
add '.test' to its name.
3. From a Terminal launch
> npm t NAMEOFTHEMODULE

If an error is raised about the command jest not found, check
the installation steps:
1. please make be sure that package-lock contains 'jest' as value of 
scripts.test .
2. eventually delete the package-lock and type
> npm init again

## Other useful resources
 * [Official doc](https://jestjs.io/)
 * [A nice cheatsheet](https://devhints.io/jest)
