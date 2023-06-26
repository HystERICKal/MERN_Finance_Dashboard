//This is a styled component (part of the emotion library)
//These styles can be shared between different components
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignContent: "center",
});

export default FlexBetween;
