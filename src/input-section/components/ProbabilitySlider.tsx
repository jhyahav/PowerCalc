import { Slider, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FC } from "react";
import { StandardCard } from "../../shared/StandardCard";

const SliderContainer = styled(Box)({
  gridColumn: "span 3",
});

const valueText = (value: number) => `${value}%`;

const marks = [
  {
    value: 20,
    label: "20%",
  },
  { value: 100, label: "100%" },
  { value: 200, label: "200%" },
];

type Props = {
  arrivalProbability: number;
  updateArrivalProbability: (prob: number) => void;
};

export const ProbabilitySlider: FC<Props> = ({
  arrivalProbability,
  updateArrivalProbability,
}) => {
  const handleChange = (_event: Event, prob: number | number[]) => {
    // slider only returns an array when using range
    if (Array.isArray(prob)) return;

    updateArrivalProbability(prob);
  };

  return (
    <SliderContainer>
      <StandardCard title="Car Arrival Probability Multiplier">
        <Slider
          defaultValue={100}
          getAriaValueText={valueText}
          valueLabelDisplay="auto"
          min={20}
          max={200}
          marks={marks}
          value={arrivalProbability}
          valueLabelFormat={valueText}
          onChange={handleChange}
          sx={{ width: "90%", margin: "auto" }}
        />
      </StandardCard>
    </SliderContainer>
  );
};
