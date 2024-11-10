export type SimulationInput = {
  arrivalProbability: number;
  carPowerConsumption: number;
  powerPerChargepoint: PowerPerChargePoint;
};

export type PowerPerChargePoint = { [wattage: number]: number };
