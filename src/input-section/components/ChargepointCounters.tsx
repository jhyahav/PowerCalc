import { FC } from "react";
import { PowerPerChargePoint } from "../../types";
import { ViewChargepointCounter } from "./ViewChargepointCounter";

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

  return wattages.map((wattage) => (
    <ViewChargepointCounter
      count={powerPerChargePoint[wattage]}
      key={wattage}
      updateCount={getUpdaterBywattage(wattage)}
      wattage={wattage}
    />
  ));
};
