import { FC } from "react";
import { ValueDisplay } from "./ValueDisplay";

type Props = { value: number };

export const ChargingValue: FC<Props> = ({ value }) => {
  return (
    <ValueDisplay
      title="Chargepoint Power"
      value={`${value.toLocaleString()} kW`}
      subtitle="daily average"
    />
  );
};
