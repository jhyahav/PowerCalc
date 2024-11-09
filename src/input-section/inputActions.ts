import { SimulationInput } from "../types";

export const InputActions: Record<string, keyof SimulationInput> = {
  UPDATE_ARRIVAL_PROBABILITY: "arrivalProbability",
  UPDATE_CAR_POWER_CONSUMPTION: "carPowerConsumption",
  UPDATE_POWER_PER_CHARGEPOINT: "powerPerChargepoint",
} as const;

export type InputAction<
  T extends keyof SimulationInput = keyof SimulationInput
> = {
  type: T;
  payload: SimulationInput[T];
};
