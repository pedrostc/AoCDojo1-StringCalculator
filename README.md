# Art of Code Dojo - Session 1
# Introduction to TDD and pair programming with JavaScript

## TDD Basics

## Ping-Pong Pair Programming

In this session we're trying out the "Ping-Pong" style of pair programming.
The idea is that both participats in pair take turns as the driver on every new failing test (Red step on the TDD cycle).

- A Writes a test and sees it failing
- B Writes the code needed to make the test pass
- B Refactors the code as needed
- B Writes a new failing test
- A Writes the code needed to makr the test pass
- ...

## JavaScript Testing
In this repository we're using [mocha](https://mochajs.org/) as our test runner and [chai](https://www.chaijs.com/) as our assertation library.

To write a test you should use the `it` function, it takes a string as its first argument and a function as the second. The string is the test description and the function is the test code:
```js
it('should receive a csv string', function() { /* Test code here */ });
```

You can use the `describe` function to group your tests. It has the same signature as the `it` function, receiving a string and a function as arguments. You should add your tests to the body of the second argument:
```js
describe('add', function() {
    it('should receive a csv string', function() { /* Test code here */ });
    it('should sum all comma separated elements in the string', function() { /* Test code here */ });
});
```

### Asserting
For assertation this repo is using the `expect` object. It offers an [idiomatic/fluent interface](https://www.chaijs.com/api/bdd) to write your assertations.
```js
expect(value).to.be.true;
expect(value).to.equals(true);
expect(value).not.to.equals(false);
```

#### Errors
There are two styles to assert on errors, one uses a try/catch block and asserts on the error object in the catch block. The second uses the `throw` method of the `expect` object.
```js
// Using a try/catch block
it('should throw an error', function() {
    try {
        brokenFunction();
    } catch(error) {
        expect(error.message).to.equal('I am an error message');
    }
});
```

```js
// Using the expect.to.throw method
it('should throw an error', function() {
    expect(brokenFunction()).to.throw();
    // or, if you want to be more specific
    expect(brokenFunction()).to.throw(Error, 'I am an error message');
});
```

## Coding Challenge - String Calculator
### Rules
- Try not to read ahead.
- Do one task at a time. The trick is to learn to work incrementally.
- Make sure you only test for correct inputs. There is no need to test for invalid inputs for this challenge.

### Challenge Tasks

1. Create a simple String calculator that has a method called `add` that takes a string numbers separated by a comma as its input and return the sum of its elements.
    - The method can take up to two numbers, separated by commas, and will return their sum. For example `""` or `"1"` or `"1,2"` are valid inputs.
    - For an empty string it should return 0. 

2. Allow the `add` method to handle an unknown amount of numbers

3. Allow the `add` method to handle new lines between numbers (instead of commas).
    - The following input is ok: `"1\n2,3"` (will equal 6)
    - The following input is NOT ok: `"1,\n"` (not need to prove it - just clarifying)

4. Add support to different delimiters
    - To change a delimiter, the beginning of the string will contain a separate line that looks like this: `"//[delimiter]\n[numbers…]"` for example `"//;\n1;2"` should return 3 where the default delimiter is `";"`.
    - The first line is optional.
    - All existing scenarios should still be supported

5. Calling `add` with a negative number will throw an error `"negatives not allowed"` - and the negative number that was passed. 
    - for example `add("1,-2") -> "negatives not allowed: -2"`
    - If there are multiple negatives, show all of them in the error message.

6. Numbers bigger than 1000 should be ignored, so adding 2 + 1001 = 2

7. Delimiters can be of any length with the following format: `"//[delimiter]\n"` for example: `"//[***]\n1***2***3"` should return `6`.

8. Allow multiple delimiters like this: `"//[delim1][delim2]\n"` for example `"//[*][%]\n1*2%3"` should return `6`.

9. Make sure you can also handle multiple delimiters with length longer than one char

Original author: [Roy Osherove](https://osherove.com/tdd-kata-1)

