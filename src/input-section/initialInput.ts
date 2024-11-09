import { SimulationInput } from "../types";

export const initialInput: SimulationInput = {
  arrivalProbability: 100,
  carPowerConsumption: 18,
  powerPerChargepoint: { [11]: 5, [22]: 3, [50]: 1 },
};
