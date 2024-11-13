import { ChargingValue } from "./ChargingValue";
import { TotalEnergyCharged } from "./TotalEnergyCharged";
import { ChargingEventCount } from "./ChargingEventCount";
import { PeakDemand } from "./PeakDemand";

import { Box, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

export const Statistics = () => {
  return (
    <Container>
      <ChargingValue value={50.5} />
      <Divider flexItem />
      <TotalEnergyCharged total={10400} />
      <Divider flexItem />
      <ChargingEventCount count={692} />
      <Divider flexItem />
      <PeakDemand peakDemand={200} />
    </Container>
  );
};
