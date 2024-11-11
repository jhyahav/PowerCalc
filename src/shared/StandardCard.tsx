import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ComponentProps, FC, ReactNode } from "react";

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 8,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  marginBottom: theme.spacing(2),
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: theme.spacing(2),
  height: "100%",
}));

const Title = styled(Typography)({
  fontWeight: 600,
  fontSize: "1.1rem",
});

type Props = {
  title: string;
  children: ReactNode;
  sx?: ComponentProps<typeof Card>["sx"];
};

export const StandardCard: FC<Props> = ({ title, children, sx }) => {
  return (
    <StyledCard variant="outlined" sx={sx}>
      <StyledCardContent>
        <Title>{title}</Title>
        {children}
      </StyledCardContent>
    </StyledCard>
  );
};
