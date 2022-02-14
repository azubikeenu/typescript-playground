const profile = {
  name: 'Richard',
  age: 20,
  coordinates: {
    lat: 90,
    long: -10,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;

const {
  coordinates: { lat, long },
}: { coordinates: { lat: number; long: number } } = profile;
