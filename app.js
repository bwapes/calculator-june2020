import {doIt} from './utils.js';

let test = doIt( 1 , 2 , '+')
console.log(test);

// get dom elements
// get add-input-1
const addInput1 = document.getElementById('add-input-1');
// get add-input-2
const addInput2 = document.getElementById('add-input-2');
// get add-button
const boogerButton = document.getElementById('add-button');
// get the add-result span
const boogerSpan = document.getElementById('add-result');

// initialize state 

// set the event handler to the button
boogerButton.addEventListener('click', () => {
    // in the click event handler . . .
    // make sure we have the inputs (console.log)
    // make sure we have the span
    // make sure we have the .values of the inputs
    const value1 = addInput1.value;
    const value2 = addInput2.value;

    // add the two values together
    let sum = doIt(value1, value2, '+')

    // update the textContent of the span
    boogerSpan.textContent = sum;
});


const subtractInput1 = document.querySelector('#subtractInput1');
const subtractInput2 = document.querySelector('#subtractInput2');
const subtractButton = document.querySelector('#subtractButton');
const subtractResult = document.querySelector('#subtractResult');

subtractButton.addEventListener('click', () => {
    const value1 = subtractInput1.value;
    const value2 = subtractInput2.value;
    let sum = doIt(value1, value2, '-')
    subtractResult.textContent = sum;

})

const multiplyInput1 = document.querySelector('#multiplyInput1');
const multiplyInput2 = document.querySelector('#multiplyInput2');
const multiplyButton = document.querySelector('#multiplyButton');
const multiplyResult = document.querySelector('#multiplyResult');

multiplyButton.addEventListener('click', () => {
    let value1 = multiplyInput1.value;
    const value2 = multiplyInput2.value;
    let sum = doIt(value1, value2, '*')
    multiplyResult.textContent = sum;
})

const divideInput1 = document.querySelector('#divideInput1')
const divideInput2 = document.querySelector('#divideInput2')
const divideButton = document.querySelector('#divideButton')
const divideResult = document.querySelector('#divideResult')

divideButton.addEventListener('click', () => {
    let value1 = divideInput1.value;
    let value2 = divideInput2.value;
    let sum = doIt(value1, value2, '/')
    divideResult.textContent = sum;
})