const add = (a: number, b: number): number => a + b;

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const showMessage = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const throwErrorTwo = (message: string): string => {
  if (!message) throw Error('An error occured');
  return message;
};

const throwErrorThree = (message: string): void => {
  if (!message) throw Error('An error occured');
};

// DESTRUCTURING WITH ANNOTATIONS

const forecast: { date: Date; weather: string } = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date, weather);
};

logWeather(forecast);
