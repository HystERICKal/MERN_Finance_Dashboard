// eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  //This is a type setting by material ui and can be found inside createPalette.d.ts file
  //In Object Oriented Programming you would just add "extends" but you don't need to do that for typescript
  interface PaletteColor {
    [key: number]: string; //Add this since it doesn't exist in the type definition yet we used it in theme.ts
  }

  interface Palette {
    tertiary: PaletteColor; //Add this since it doesn't exist in the type definition yet we used it in theme.ts
  }
}
