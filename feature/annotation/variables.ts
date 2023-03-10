let socre: number = 75;
const now: Date = new Date();
let point: { x: number; y: number } = {
  x: 20,
  y: 34,
};
class Car {}
let car: Car = new Car();

let logNumber: (i: number) => void = (i) => {
  console.log(i);
};
let json = '{"x":20 , "y":25, a:"dfsd"}';
const cor: { x: number; y: number; a: number } = JSON.parse(json);
console.log(cor.a);

let numbers = [-25, -2, 12];
let numberAboveZero: boolean | number = 25;
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] > 0) {
    numberAboveZero = false;
  }
}
