class Vehical {
  constructor(public color: string) {}
  protected drive(): void {
    console.log("drive");
  }
  private horn(): void {
    console.log("beep");
  }
}
// const vehical = new Vehical("black");
// console.log(vehical.color);
class Car extends Vehical {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  drive(): void {
    console.log("car drive");
  }
  startDriving(): void {
    this.drive();
  }
}
const car = new Car(4, "red");
car.startDriving();
