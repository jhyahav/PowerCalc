export type SimulationInput = {
  arrivalProbability: number;
  carPowerConsumption: number;
  powerPerChargepoint: { [wattage: number]: number };
};
