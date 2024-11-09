import { SimulationInput } from "../types";
import { InputAction } from "./inputActions";

export const inputReducer = (state: SimulationInput, action: InputAction) => {
  return { ...state, [action.type]: action.payload };
};
