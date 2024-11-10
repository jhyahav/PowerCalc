import { Box, InputAdornment, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ChangeEvent, FC, useState } from "react";

type Props = {
  carPowerConsumption: number;
  updateCarPowerConsumption: (power: number) => void;
};

const CarPowerContainer = styled(Box)({
  gridColumn: "span 3",
});

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
    <CarPowerContainer>
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
    </CarPowerContainer>
  );
};
