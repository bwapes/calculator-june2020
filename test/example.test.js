// IMPORT MODULES under test here:
import {doIt} from '../utils.js';

const test = QUnit.test;

test('the function should recieve 2 number inputs and an operator input (as a string) and return the sum of combining all arguments', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const arg1 = 1;
    const arg2 = 2;
    const arg3 = '+';
    const expected = 3;

    const try2arg1 = 4;
    const try2arg2 = 2;
    const try2arg3 = '-';
    const try2expected = 2;

    const try3arg1 = 4;
    const try3arg2 = 5;
    const try3arg3 = '*';
    const try3expected = 20;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = doIt(arg1, arg2, arg3)
    const actual2 = doIt(try2arg1, try2arg2, try2arg3)
    const actual3 = doIt(try3arg1, try3arg2, try3arg3)
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    expect.equal(actual2, try2expected)
    expect.equal(actual3, try3expected)
});
