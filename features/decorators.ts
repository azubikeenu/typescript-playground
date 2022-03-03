@constructorDecorator
class Boat {
  color: string = 'Red';

  @testDecorator
  get formattedColor(): string {
    return `the color is ${this.color}`;
  }

  @logError('Opps something went wrong')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator agility: string
  ): void {
    if (speed === 'fast') console.log('Whoooof!!!');
    else {
      console.log('Nothing ');
    }
  }
}

function testDecorator(target: any, key: string): void {
  console.log(key);
}

function constructorDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number): void {
  console.log(key, index);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function () {
      try {
        method();
      } catch (ex) {
        console.log(errorMessage);
      }
    };
  };
}

// new Boat().pilot('fast');
