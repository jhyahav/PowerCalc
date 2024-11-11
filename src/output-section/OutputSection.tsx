import { styled } from "@mui/material/styles";
import { EnergyConsumptionChart } from "./EnergyConsumptionChart";
import { Box } from "@mui/material";

const OutputSectionContainer = styled(Box)({
  width: "100%",
  fontFamily: "sans-serif",
});

export const OutputSection = () => {
  return (
    <OutputSectionContainer>
      <EnergyConsumptionChart />
    </OutputSectionContainer>
  );
};
