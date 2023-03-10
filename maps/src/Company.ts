import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";
export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  color: string;
  markerContent(): string {
    return `<div>
    <h1>ComapnayName:${this.companyName}</h1>
                <h3>CatchPhrase:${this.catchPhrase}</h3>
                </div>`;
  }
}
