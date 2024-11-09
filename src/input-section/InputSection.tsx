import { useReducer } from "react";
import { inputReducer } from "./inputReducer";
import { initialInput } from "./initialInput";
import { InputActions } from "./inputActions";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { ProbabilitySlider } from "./ProbabilitySlider";

const InputSectionContainer = styled(Box)({
  display: "grid",
  width: "100%",
});
export const InputSection = () => {
  const [currentInput, dispatch] = useReducer(inputReducer, initialInput);

  const updateArrivalProbability = (payload: number) =>
    dispatch({ type: InputActions.UPDATE_ARRIVAL_PROBABILITY, payload });

  const { arrivalProbability } = currentInput;
  return (
    <InputSectionContainer>
      <ProbabilitySlider
        arrivalProbability={arrivalProbability}
        updateArrivalProbability={updateArrivalProbability}
      />
    </InputSectionContainer>
  );
};
