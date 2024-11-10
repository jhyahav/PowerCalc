import { NumberInputProps } from "@mui/base";
import { QuantityInput } from "./QuantityInput";
import { FC } from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import EvStationIcon from "@mui/icons-material/EvStation";

type Props = {
  wattage: number;
  count: number;
  updateCount: (count: number) => void;
};

type OptFuncArgs<T> = T extends (...args: infer P) => unknown ? P : never;
type OnChange = NumberInputProps["onChange"];

const CounterContainer = styled(Box)({
  gridColumn: "span 2",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
});

export const ViewChargepointCounter: FC<Props> = ({
  wattage,
  count,
  updateCount,
}) => {
  const handleChange = (
    _event: OptFuncArgs<OnChange>[0],
    value: number | null
  ) => updateCount(value ?? 0);

  return (
    <CounterContainer>
      <Typography>{wattage} kW</Typography>
      <EvStationIcon sx={{ fontSize: "5rem" }} />
      <QuantityInput min={0} value={count} onChange={handleChange} />
    </CounterContainer>
  );
};
