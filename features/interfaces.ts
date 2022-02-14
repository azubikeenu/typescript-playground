// interface Vehicle {
//   name: string;
//   year: number;
//   broken: boolean;
//   summary(): string;
// }

// const oldCivic: Vehicle = {
//   name: 'civic',
//   year: 2000,
//   broken: true,
//   summary() {
//     return ` Name is : ${this.name} and Manufaturing year is ${this.year} and status : ${this.broken}`;
//   },
// };

// const printVehicle = (vehicle: Vehicle): void => {
//   console.log(vehicle.summary());
// };
// printVehicle(oldCivic);

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary() {
    return ` Name is : ${this.name} and Manufaturing year is ${this.year} and status : ${this.broken}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugarContent: 40,
  summary() {
    return `My drink has ${this.sugarContent} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);

printSummary(drink);
