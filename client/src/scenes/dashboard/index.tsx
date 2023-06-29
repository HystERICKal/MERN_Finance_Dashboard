import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

type Props = {};

const gridTemplateLargeScreens = `
    "a d g"
    "a d g"
    "a d g"
    "a d h"
    "b e h"
    "b e h"
    "b f i"
    "c f i"
    "c f j"
    "c f j"
    `;

const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"
`;

const Dashboard = (props: Props) => {
  //use this to determine if screen size is at a mininimum width of 1200px or not
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { palette } = useTheme();
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isAboveMediumScreens
          ? {
              //Large screens

              //Split column into 3 repeated columns,
              //but each column should never be smaller than 370px
              //However if it's a very wide screen, then go upto 1fr
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",

              //60px represents one row unit like a,b,c,d in the "gridTemplate" variable above
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              //Small screens

              gridAutoColumns: "1fr",

              //Each row on smallscreens has a row height of 80px
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      <Box bgcolor="#fff" gridArea="a"></Box>
      <Box bgcolor="#fff" gridArea="b"></Box>
      <Box bgcolor="#fff" gridArea="c"></Box>
      <Box bgcolor="#fff" gridArea="d"></Box>
      <Box bgcolor="#fff" gridArea="e"></Box>
      <Box bgcolor="#fff" gridArea="f"></Box>
      <Box bgcolor="#fff" gridArea="g"></Box>
      <Box bgcolor="#fff" gridArea="h"></Box>
      <Box bgcolor="#fff" gridArea="i"></Box>
      <Box bgcolor="#fff" gridArea="j"></Box>
    </Box>
  );
};

export default Dashboard;
