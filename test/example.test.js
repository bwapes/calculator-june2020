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
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = doIt(arg1, arg2, arg3)

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
