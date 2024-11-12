import { styled } from "@mui/material/styles";
import { EnergyConsumptionChart } from "./components/EnergyConsumptionChart";
import { Box } from "@mui/material";
import { StandardCard } from "../shared/StandardCard";

const OutputSectionContainer = styled(Box)({
  width: "100%",
  fontFamily: "sans-serif",
});

const OutputCardContentBox = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
});

export const OutputSection = () => {
  return (
    <OutputSectionContainer>
      <StandardCard>
        <OutputCardContentBox>
          <EnergyConsumptionChart />
          <EnergyConsumptionChart />
        </OutputCardContentBox>
      </StandardCard>
    </OutputSectionContainer>
  );
};
