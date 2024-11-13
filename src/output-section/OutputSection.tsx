import { styled } from "@mui/material/styles";
import { EnergyConsumptionChart } from "./components/EnergyConsumptionChart";
import { Statistics } from "./components/Statistics";
import { Box, Divider } from "@mui/material";
import { StandardCard } from "../shared/StandardCard";

const OutputSectionContainer = styled(Box)({
  width: "100%",
  fontFamily: "sans-serif",
});

const OutputCardContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  rowGap: theme.spacing(4),
}));

export const OutputSection = () => {
  return (
    <OutputSectionContainer>
      <StandardCard>
        <OutputCardContentBox>
          <EnergyConsumptionChart />
          <Divider orientation="vertical" flexItem />
          <Statistics />
        </OutputCardContentBox>
      </StandardCard>
    </OutputSectionContainer>
  );
};
