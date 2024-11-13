import { FC } from "react";
import { ValueDisplay } from "./ValueDisplay";

type Props = { peakDemand: number };

export const PeakDemand: FC<Props> = ({ peakDemand }) => {
  return (
    <ValueDisplay
      title="Peak Demand"
      value={`${peakDemand.toLocaleString()} kW`}
    />
  );
};
