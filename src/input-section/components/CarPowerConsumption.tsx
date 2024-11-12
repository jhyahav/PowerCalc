import { Box, InputAdornment, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ChangeEvent, FC, useState } from "react";
import { StandardCard } from "../../shared/StandardCard";

type Props = {
  carPowerConsumption: number;
  updateCarPowerConsumption: (power: number) => void;
};

const CarPowerContainer = styled(Box)({
  gridColumn: "span 3",
});

const StyledTextField = styled(TextField)({
  width: "85%",
  margin: "auto",
});

const ERROR_MESSAGE = "Please enter a valid, non-negative number.";
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
      <StandardCard title="Average Car Power Consumption">
        <StyledTextField
          value={carPowerConsumption}
          onChange={handleChange}
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">kWh</InputAdornment>,
              sx: { fontSize: "1.5rem" },
            },
          }}
          error={hasError}
          helperText={hasError ? ERROR_MESSAGE : " "}
        />
      </StandardCard>
    </CarPowerContainer>
  );
};
