import { InputAdornment, TextField } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";

type Props = {
  carPowerConsumption: number;
  updateCarPowerConsumption: (power: number) => void;
};

export const CarPowerConsumption: FC<Props> = ({
  carPowerConsumption,
  updateCarPowerConsumption,
}) => {
  const [hasError, setError] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numberValue = Number(value);
    console.log(event.target.value);
    if (isNaN(numberValue) || numberValue < 0) {
      setError(true);
      return;
    }
    updateCarPowerConsumption(numberValue);
    setError(false);
  };

  return (
    <TextField
      value={carPowerConsumption}
      onChange={handleChange}
      slotProps={{
        input: {
          endAdornment: <InputAdornment position="end">kWh</InputAdornment>,
        },
      }}
      error={hasError}
      helperText={hasError ? "Please enter a valid non-negative number" : " "}
    />
  );
};
