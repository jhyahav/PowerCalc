import type { FC } from "react";
import { ValueDisplay } from "./ValueDisplay";

type Props = { total: number };

export const TotalEnergyCharged: FC<Props> = ({ total }) => {
  return (
    <ValueDisplay
      title="Total Energy Charged"
      value={`${total.toLocaleString()} kWh`}
      subtitle="throughout lifetime"
    />
  );
};
