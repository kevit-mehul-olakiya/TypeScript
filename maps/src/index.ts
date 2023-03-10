import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
const user = new User();
const customMap = new CustomMap("map");
const comapny = new Company();
customMap.addMarker(user);
customMap.addMarker(comapny);
