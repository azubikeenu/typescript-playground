let apples: number = 30;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in Objects
let now: Date = new Date();

let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];

//Classes
class Car {}
let car: Car = new Car();

// Object literals
const obj: { x: number; y: number } = {
  x: 1,
  y: 2,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// WHEN TO USE ANNOTATIONS
//1) Has a function that returns an 'any' type

const json = '{"x" : 10 , "y" : 20}';

const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates);

//2) When we declare a varibale on one line and initialize it later
let words = ['red', 'green', 'blue'];

let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') foundWord = true;
}

//3) When we have a variable that its type cannot be inferred
const numbers = [-10, -1, 9];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) numberAboveZero = numbers[i];
}
