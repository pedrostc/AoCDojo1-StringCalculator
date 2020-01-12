# Art of Code Dojo - Session 1
# Introduction to TDD and pair programming with JavaScript

## Table of contents
- [Getting started with this repository](#getting-started-with-this-repository)
- [TDD Basics](#tdd-basics)
  - [Red-Green-Refactor](#red-green-refactor)
  - [Cycle steps as design opportunities](#cycle-steps-as-design-opportunities)
  - [TDD side effects](#tdd-side-effects)
- [Ping-Pong Pair Programming](#ping-pong-pair-programming)
- [JavaScript Testing](#javascript-testing)
  - [Writing tests](#writing-tests)
  - [Asserting](#asserting)
    - [Errors](#errors)
  - [Filenames](#filenames)
- [Coding Challenge - String Calculator](#coding-challenge---string-calculator)
  - [Rules](#rules)
  - [Challenge Tasks](#challenge-tasks)
  

## Getting started with this repository
You'll need [Node.Js](https://nodejs.org/) installed to be able to utilize this repository.

After cloning, run `npm install` on the root of this repository to install all necessary dependencies.

To run tests, you can use the `npm run test` command. If you want to enable file watch, so the tests re-run automatically after saving a file, you can use the `npm run test:watch` command.

The test framework is configured to look for files inside of the `src` folder and to look for test files with the `.spec.js` extension.

## TDD Basics
Test-Driven Development (TDD) is a software development methodology where you write a test first and then write the code to make the test pass. The tests should reflect one of the requirements or parts of it.  It works on a cycle where first we write tests that express what your system should do; then you write your code to make it meet the expectations expressed in the test, and then refactor your code to enhance its design. This cycle is also known as the Red-Green-Refactor cycle.

### Red-Green-Refactor
- Red - We write a test that reflects the requirement, or part of it, that we will work on. The test will describe a behaviour that does not exist on the code if there's any code written whatsoever so that the test will fail.
- Green - We write the minimal amount of code required to make the test pass. This code can be as dirty as required. We're not focusing on quality or clean code at this point. We just want to make the test pass as fast as possible.
- Refactor - After we have a passing test, we will focus on organizing and cleaning the code up. Here we're thinking about the design and quality of our implementation, so take your time.

### Cycle steps as design opportunities
During the TDD cycle, we have separate opportunities to think about different aspects of the design of the code we're writing. Here's one way of thinking about these.
- On the Red step, we will make decisions about the API design: what its contract looks like and what to expect.
- On the Green stage, we define the bare minimum that we need to deliver the requirement specified by the test.
- On the Refactor step, we can focus on the design of the solution, organizing the code better, removing duplications and applying patterns.

### TDD side effects
This approach to development has some side effects:
- You have a faster feedback cycle to work with. The automated tests should fast so you can have near-immediate feedback on the impact of your code changes.
- It separates the concerns (steps) of the development process by having different moments to think about meeting requirements and good design at different moments.
- It gives developers a safe net of automated tests, which facilitates refactoring the code throughout its lifespan.
- Tests can be a good way to document the intended behaviour of the code.

## Ping-Pong Pair Programming
In this session, we're trying out the "Ping-Pong" style of pair programming.
The idea is that both participants in the pair take turns as the driver on every new failing test (Red step on the TDD cycle).

- A Writes a test and sees it failing
- B Writes the code needed to make the test pass
- B Refactors the code as needed
- B Writes a new failing test
- A Writes the necessary code to make the test pass
- ...

## JavaScript Testing
In this repository, we're using [Jest](https://jestjs.io/en/) as our test framework.

### Writing tests
To write a test, you should use the `it` function. It takes a string as its first argument and a function as the second. The string is the test description, and the function is the test code:
```js
it('should receive a CSV string', function() { /* Test code here */ });
```

You can use the `describe` function to group your tests. It has the same signature as the `it` function, receiving a string and a function as arguments. You should add your tests to the body of the second argument:
```js
describe('add', function() {
    it('should receive a csv string', function() { /* Test code here */ });
    it('should sum all comma separated elements in the string', function() { /* Test code here */ });
});
```

### Asserting
For assertation this repo follows the convention of using the [expect](https://jestjs.io/docs/en/expect) notation for the tests assertations.
```js
expect(value).toBeTruthy()
expect(value).toEqual(true);
expect(value).not.toEqual(false);
expect(value).not.toBeFalsy(false);
```

#### Errors
There are two styles to assert errors: one uses a try/catch block and asserts on the error object in the catch block. The second uses the `toThrow` method of the `expect` object.
```js
// Using a try/catch block
it('should throw an error', function() {
    try {
        brokenFunction();
    } catch(error) {
        expect(error.message).toEqual('I am an error message');
    }
});
```

```js
// Using the expect.toThrow method
it('should throw an error', function() {
    expect(brokenFunction()).toThrow();
    // or, if you want to be more specific
    expect(brokenFunction()).toThrow(new Error('I am an error message'));
});
```

### Filenames
This repository is using the following convention for test file names: `<name>.spec.js`.
If you use the `.spec.js` extension for your file, the test runner will pick it up automatically and execute all available tests.

## Coding Challenge - String Calculator
Original kata author: [Roy Osherove](https://osherove.com/tdd-kata-1)

### Rules
- Try not to read ahead.
- Do one task at a time. The trick is to learn to work incrementally.
- Make sure you only test for correct inputs. There is no need to test for invalid inputs for this challenge.

### Challenge Tasks

1. Create a simple String calculator that has a method called `add` that takes a string of numbers separated by a comma as its input and return the sum of its elements.
    - The method can take up to two numbers, separated by commas, and will return their sum. For example `""` or `"1"` or `"1,2"` are valid inputs.
    - For an empty string, it should return 0. 

2. Allow the `add` method to handle an unknown amount of numbers

3. Allow the `add` method to handle new lines between numbers (instead of commas).
    - The following input is ok: `"1\n2,3"` (will equal 6)
    - The following input is NOT ok: `"1,\n"` (not need to prove it - just clarifying)

4. Add support to different delimiters
    - To change a delimiter, the beginning of the string will contain a separate line that looks like this: `"//[delimiter]\n[numbers…]"` for example `"//;\n1;2"` should return 3 where the default delimiter is `";"`.
    - The first line is optional.
    - All existing scenarios should still be supported

5. Calling `add` with a negative number will throw an error `" negatives not allowed"` - and the negative number that was passed. 
    - for example `add("1,-2") -> "negatives not allowed: -2"`
    - If there are multiple negatives, show all of them in the error message.

6. Numbers greater than 1000 should be ignored, so adding 2 + 1001 = 2

7. Delimiters can be of any length with the following format: `"//[delimiter]\n"` for example: `"//[***]\n1***2***3"` should return `6`.

8. Allow multiple delimiters like this: `"//[delim1][delim2]\n"` for example `"//[*][%]\n1*2%3"` should return `6`.

9. Make sure you can also handle multiple delimiters with length longer than one char