import { FC } from "react";
import { ValueDisplay } from "./ValueDisplay";

type Props = { count: number };

export const ChargingEventCount: FC<Props> = ({ count }) => {
  return (
    <ValueDisplay
      value={count.toLocaleString()}
      title="Charging Events"
      subtitle="per year"
    />
  );
};
