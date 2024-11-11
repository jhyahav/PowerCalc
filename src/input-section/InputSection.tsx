import { useReducer } from "react";
import { inputReducer } from "./inputReducer";
import { initialInput } from "./initialInput";
import { InputActions } from "./inputActions";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { ProbabilitySlider } from "./components/ProbabilitySlider";
import { CarPowerConsumption } from "./components/CarPowerConsumption";
import { PowerPerChargePoint } from "../types";
import { ChargepointCounters } from "./components/ChargepointCounters";

const InputSectionContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  width: "100%",
  gridTemplateColumns: "repeat(6, 1fr)",
  gridTemplateRows: "auto auto",
  columnGap: theme.spacing(2),
  rowGap: theme.spacing(1),
}));
export const InputSection = () => {
  const [currentInput, dispatch] = useReducer(inputReducer, initialInput);

  const updateCarPowerConsumption = (payload: number) =>
    dispatch({ type: InputActions.UPDATE_CAR_POWER_CONSUMPTION, payload });

  const updateArrivalProbability = (payload: number) =>
    dispatch({ type: InputActions.UPDATE_ARRIVAL_PROBABILITY, payload });

  const updatePowerPerChargepoint = (payload: PowerPerChargePoint) =>
    dispatch({ type: InputActions.UPDATE_POWER_PER_CHARGEPOINT, payload });

  const { arrivalProbability, carPowerConsumption, powerPerChargepoint } =
    currentInput;

  return (
    <InputSectionContainer>
      <ChargepointCounters
        powerPerChargePoint={powerPerChargepoint}
        updatePowerPerChargepoint={updatePowerPerChargepoint}
      />
      <CarPowerConsumption
        carPowerConsumption={carPowerConsumption}
        updateCarPowerConsumption={updateCarPowerConsumption}
      />
      <ProbabilitySlider
        arrivalProbability={arrivalProbability}
        updateArrivalProbability={updateArrivalProbability}
      />
    </InputSectionContainer>
  );
};
