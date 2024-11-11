import { FC } from "react";
import { PowerPerChargePoint } from "../../types";
import { ViewChargepointCounter } from "./ViewChargepointCounter";
import { StandardCard } from "../../shared/StandardCard";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const FlexContainer = styled(Box)({
  display: "flex",
  width: "100%",
  justifyContent: "space-around",
  flexWrap: "wrap",
});

type Props = {
  powerPerChargePoint: PowerPerChargePoint;
  updatePowerPerChargepoint: (payload: PowerPerChargePoint) => void;
};

export const ChargepointCounters: FC<Props> = ({
  powerPerChargePoint,
  updatePowerPerChargepoint,
}) => {
  const wattages = Object.keys(powerPerChargePoint).map(Number);

  const getUpdaterBywattage = (wattage: number) => (newCount: number) =>
    updatePowerPerChargepoint({ ...powerPerChargePoint, [wattage]: newCount });

  return (
    <StandardCard title={"Charge Points"} sx={{ gridColumn: "span 6" }}>
      <FlexContainer>
        {wattages.map((wattage) => (
          <ViewChargepointCounter
            count={powerPerChargePoint[wattage]}
            key={wattage}
            updateCount={getUpdaterBywattage(wattage)}
            wattage={wattage}
          />
        ))}
      </FlexContainer>
    </StandardCard>
  );
};
