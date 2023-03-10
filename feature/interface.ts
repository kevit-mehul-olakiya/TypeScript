interface Report {
  name: string;
  year: Date;
  Broken: boolean;
  summary(): string;
}
const oldCar = {
  name: "civic",
  year: new Date(),
  Broken: true,
  summary(): string {
    return `${this.name}`;
  },
};
const printVehicle = (vehicle: Report) => {
  console.log(vehicle.name);
};
printVehicle(oldCar);
