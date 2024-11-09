import { NumberInputProps } from "@mui/base";
import { QuantityInput } from "./QuantityInput";
import { FC } from "react";

type Props = { count: number; updateCount: (count: number) => void };

type OptFuncArgs<T> = T extends (...args: infer P) => unknown ? P : never;
type OnChange = NumberInputProps["onChange"];

export const ChargepointCounter: FC<Props> = ({ count, updateCount }) => {
  const handleChange = (
    _event: OptFuncArgs<OnChange>[0],
    value: number | null
  ) => updateCount(value ?? 0);

  return <QuantityInput min={0} value={count} onChange={handleChange} />;
};
