import { alpha } from "@mui/material/styles";
import { COLORS } from "../../utils/colors";

const withAlphas = (color: any) => {
  return {
    ...color,
    alpha4: alpha(color.main, 0.04),
    alpha8: alpha(color.main, 0.08),
    alpha12: alpha(color.main, 0.12),
    alpha30: alpha(color.main, 0.3),
    alpha50: alpha(color.main, 0.5),
  };
};

export const neutral = {
  50: COLORS.BW["100"],
  100: COLORS.BW["100"],
  200: COLORS.BW["200"],
  300: COLORS.BW["300"],
  400: COLORS.BW["400"],
  500: COLORS.BW["500"],
  600: COLORS.BW["600"],
  700: "#2F3746",
  800: "#1C2536",
  900: "#111927",
};

export const indigo = withAlphas({
  lightest: COLORS.BRAND["200"],
  light: COLORS.BRAND["300"],
  main: COLORS.BRAND["400"],
  dark: COLORS.BRAND["500"],
  darkest: COLORS.BRAND["600"],
  contrastText: COLORS.BW[100],
});

export const success = withAlphas({
  lightest: COLORS.SUCCESS[200],
  light: COLORS.SUCCESS[300],
  main: COLORS.SUCCESS[400],
  dark: COLORS.SUCCESS[500],
  darkest: COLORS.SUCCESS[600],
  contrastText: COLORS.BW[100],
});

export const info = withAlphas({
  lightest: COLORS.INFO[200],
  light: COLORS.INFO[300],
  main: COLORS.INFO[400],
  dark: COLORS.INFO[500],
  darkest: COLORS.INFO[600],
  contrastText: COLORS.BW[100],
});

export const warning = withAlphas({
  lightest: COLORS.WARNING[200],
  light: COLORS.WARNING[300],
  main: COLORS.WARNING[400],
  dark: COLORS.WARNING[500],
  darkest: COLORS.WARNING[600],
  contrastText: COLORS.BW[100],
});

export const error = withAlphas({
  lightest: COLORS.DANGER[200],
  light: COLORS.DANGER[300],
  main: COLORS.DANGER[400],
  dark: COLORS.DANGER[500],
  darkest: COLORS.DANGER[600],
  contrastText: COLORS.BW[100],
});
