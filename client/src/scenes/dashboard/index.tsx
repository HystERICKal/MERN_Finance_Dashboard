import { Box, useMediaQuery } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";

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

const Dashboard = () => {
  //use this to determine if screen size is at a mininimum width of 1200px or not
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");

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
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
};

export default Dashboard;
