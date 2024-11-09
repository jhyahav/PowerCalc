import { Slider } from "@mui/material";
import { FC } from "react";

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
    <Slider
      defaultValue={100}
      getAriaValueText={valueText}
      valueLabelDisplay="on"
      min={20}
      max={200}
      marks={marks}
      value={arrivalProbability}
      valueLabelFormat={valueText}
      onChange={handleChange}
    />
  );
};
