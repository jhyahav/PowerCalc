import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { InputSection } from "./input-section/InputSection";
import { OutputSection } from "./output-section/OutputSection";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  padding: theme.spacing(2.5),
  height: `calc(100vh - ${theme.spacing(8)})`,
}));
export const PageContent = () => {
  return (
    <Container>
      <InputSection />
      <OutputSection />
    </Container>
  );
};
