// @types/mui.d.ts
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    highlight: Palette["primary"];
  }
  interface PaletteOptions {
    highlight: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  // interface ButtonPropsColorOverrides {
  //   highlight: true; // Adiciona a cor highlight
  // }
}
