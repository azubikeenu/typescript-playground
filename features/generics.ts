// Generic classes
class ArrayOfNumbers {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayofAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

// Generic Methods
function printStrings(array: string[]): void {
  array.forEach((value: string): void => console.log(value));
}

function printNumbers(array: number[]): void {
  array.forEach((value: number): void => console.log(value));
}

function printAnything<T>(array: T[]): void {
  array.forEach((value: T): void => console.log(value));
}

printAnything<string>(['A', 'B', 'C']);

// Genric Constriant

class Car implements Printable {
  print(): void {
    console.log('I am a car');
  }
}
class House implements Printable {
  print(): void {
    console.log('I am a house');
  }
}
interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(array: T[]): void {
  array.forEach((value: T): void => value.print());
}

printHousesOrCars([new House(), new Car()]);
