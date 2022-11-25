import { ReactComponent as TrafficLight } from "assets/vectors/traffic-light.svg";
import { ReactComponent as City } from "assets/vectors/city.svg";
import { ReactComponent as Expressway } from "assets/vectors/expressway.svg";
import { ReactComponent as Highway } from "assets/vectors/highway.svg";
import { ReactComponent as Bridge } from "assets/vectors/bridge.svg";
import { ReactComponent as Mountain } from "assets/vectors/mountain.svg";
import { ReactComponent as Tunnel } from "assets/vectors/tunnel.svg";
import { ReactComponent as Money } from "assets/vectors/money.svg";

export const filtersMapMocked = [
  { id: 1, name: "Traffic ligths", isActive: true, icon: TrafficLight },
  { id: 2, name: "Toll Roads", isActive: true, icon: Money },
  { id: 3, name: "Highways", isActive: true, icon: Highway },
  { id: 4, name: "ExpressWay", isActive: true, icon: Expressway },
  { id: 5, name: "Tunnels", isActive: true, icon: Tunnel },
  { id: 6, name: "Bridges", isActive: true, icon: Bridge },
  { id: 7, name: "Montain", isActive: true, icon: Mountain },
  { id: 8, name: "City", isActive: true, icon: City },
];
