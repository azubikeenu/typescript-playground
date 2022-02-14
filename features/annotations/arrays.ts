const carMakers: string[] = ['Ford', 'Toyota', 'Mercedez'];

const carByMake = [['Explorer'], ['Corolla'], ['4matic']];

// Help with inference when extracting values
const myCar = carMakers[0];
const ford = carMakers.pop();

//Prevent incompactible values
//carMakers.push(100)
carMakers.push('Mazda');

//Help with map
carMakers.map((car: string) => car.toUpperCase());

//Flexible types
const importantDates: (string | Date)[] = [new Date(), '2021-3-10'];
importantDates.push('Hello');
importantDates.push(new Date());
