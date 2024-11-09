import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { InputSection } from "./input-section/InputSection";
import { OutputSection } from "./output-section/OutputSection";

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "20px",
  height: "calc(100vh - 64px)",
});
export const PageContent = () => {
  return (
    <Container>
      <InputSection />
      <OutputSection />
    </Container>
  );
};
