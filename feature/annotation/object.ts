const profile = {
  name: "xyz",
  age: 20,
  coords: {
    lan: 0,
    lat: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};
const { age }: { age: number } = profile;
const { lan, lat }: { lan: number; lat: number } = profile.coords;
