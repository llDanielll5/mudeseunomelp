import { common } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";
import { error, indigo, info, neutral, success, warning } from "./colors";
import { COLORS } from "../../utils/colors";

declare module "@mui/material/styles" {
  interface Palette {
    danger: Palette["primary"];
    bw: Palette["primary"];
  }
  interface PaletteOptions {
    danger?: PaletteOptions["primary"];
    bw?: PaletteOptions["primary"];
  }
}

export function createPalette() {
  return {
    primary: {
      main: "#8b381f",
      light: "#cf3a30",
      dark: "#80241e",
      contrastText: COLORS.BW[100], // Texto claro
    },
    secondary: {
      main: "#fe5f2f", // Dourado principal
      light: COLORS.GOLD[400], // Dourado claro
      dark: COLORS.GOLD[600], // Dourado escuro
      contrastText: COLORS.BW[100], // Texto claro
    },
    error: {
      main: COLORS.DANGER[500], // Vermelho principal
      light: COLORS.DANGER[400], // Vermelho claro
      dark: COLORS.DANGER[600], // Vermelho escuro
    },
    success: {
      main: COLORS.SUCCESS[500], // Verde principal
      light: COLORS.SUCCESS[400], // Verde claro
      dark: COLORS.SUCCESS[600], // Verde escuro
    },
    info: {
      main: COLORS.INFO[500], // Azul principal
      light: COLORS.INFO[400], // Azul claro
      dark: COLORS.INFO[600], // Azul escuro
    },
    background: {
      default: COLORS.BW[200], // Fundo padrão
      paper: COLORS.BW[100], // Papel
    },
  };
}

// Extend color prop on components
// declare module "@mui/material/Button" {
//   export interface ButtonPropsColorOverrides {
//     goldGradient: true;
//   }
// }
