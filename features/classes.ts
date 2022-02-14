class Vehicle {
  constructor(public color: string) {}

  protected drive(): void {
    console.log('Chuka chukka');
  }
  protected honk(): void {
    console.log('Beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  drive(): void {
    console.log('voommm!!!!');
  }
  public startDriving(): void {
    this.drive();
    this.honk();
  }
}

interface TestInterface {
  showInfo(): string;
}

class TestClass implements TestInterface {
  constructor(public name: string, public age: number) {}
  showInfo(): string {
    return `Name : ${this.name}  Age : ${this.age}`;
  }
}

const vehicle = new Vehicle('Red');
