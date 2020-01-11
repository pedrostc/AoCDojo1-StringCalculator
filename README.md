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

