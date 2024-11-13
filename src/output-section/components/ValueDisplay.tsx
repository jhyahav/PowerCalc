import type { FC } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { blue } from "../../constants";

type Props = {
  value: string;
  title: string;
  subtitle?: string;
};

const Title = styled(Typography)({
  fontWeight: 500,
  fontSize: "1.2rem",
});

const Value = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: 700,
  color: blue[22],
});

export const ValueDisplay: FC<Props> = ({ value, title, subtitle }) => {
  return (
    <Box>
      <Title>{title}</Title>
      <Value>{value}</Value>
      <Typography>{subtitle}</Typography>
    </Box>
  );
};
