import {
  createTheme,
  filledInputClasses,
  inputLabelClasses,
  outlinedInputClasses,
  paperClasses,
  tableCellClasses,
} from "@mui/material";
import { COLORS } from "../../utils/colors";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    danger: true;
  }
}

// Used only to create transitions
const muiTheme = createTheme();

export function createComponents(config: any) {
  const { palette } = config;

  return {
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 40,
          height: 24,
          padding: 0,
          display: "flex",
          borderRadius: 998,
        },
        switchBase: {
          padding: 4,
          "& .MuiSwitch-thumb": {
            backgroundColor: COLORS.BRAND[400], // Thumb laranja quando desligado
          },
          "&.Mui-checked .MuiSwitch-thumb": {
            backgroundColor: "#FFF", // Thumb verde quando ligado
          },
          "&.Mui-checked": {
            transform: "translateX(16px)",
            color: "#fff",
            "& + .MuiSwitch-track": {
              opacity: 1,
              backgroundColor: COLORS.BRAND[400],
            },
          },
        },
        thumb: {
          width: 16,
          height: 16,
          borderRadius: 12,
          transition: (theme: any) =>
            theme.transitions.create(["width"], {
              duration: 200,
            }),
        },
        track: {
          borderRadius: 998,
          opacity: 0.5,
          backgroundColor: "#FFF",
          border: "1px solid",
          borderColor: COLORS.BRAND[400],
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.BW[100],
          borderRadius: "8px",
          border: `1px solid ${COLORS.BW[300]}`,

          "&.MuiChip-clickable": {
            "&:hover": {
              backgroundColor: "#d6d6d6", // Cor ao passar o mouse
            },
          },
        },
        label: {
          fontWeight: "500",
          fontSize: "14px",
          color: COLORS.BW[600],
          lineHeight: "14px",
        },
        icon: {
          color: COLORS.BW[600],
        },
        deleteIcon: {
          color: "#ff5252", // Cor do ícone de exclusão
          "&:hover": {
            color: "#ff0000", // Cor ao passar o mouse sobre o ícone de exclusão
          },
        },
      },
      defaultProps: {
        // Propriedades padrão
        clickable: true,
        color: "primary",
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: 0,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: COLORS.BRAND["400"],
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        popupIndicator: {
          color: COLORS.BRAND["500"],
        },
        popupIndicatorOpen: {
          color: COLORS.BRAND["500"],
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          borderRadius: "10px",
          minWidth: "20px",
          height: "48px",
          minHeight: "20px",
          textTransform: "uppercase",
          fontWeight: 700,
          maxHeight: "48px",
        },
        outlined: {
          borderWidth: "3px",
          BorderColor: COLORS.BRAND[500],
          maxHeight: "48px",
        },
        sizeSmall: {
          padding: "6px 16px",
        },
        sizeMedium: {
          padding: "16px 24px",
        },
        sizeLarge: {
          padding: "11px 24px",
        },
        textSizeSmall: {
          padding: "7px 12px",
        },
        textSizeMedium: {
          padding: "9px 16px",
        },
        textSizeLarge: {
          padding: "12px 16px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          [`&.${paperClasses.elevation1}`]: {
            boxShadow:
              "0px 5px 22px rgba(0, 0, 0, 0.04), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03)",
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "32px 24px",
          "&:last-child": {
            paddingBottom: "32px",
          },
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: "h6",
        },
        subheaderTypographyProps: {
          variant: "body2",
        },
      },
      styleOverrides: {
        root: {
          padding: "32px 24px 16px",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
        },
        html: {
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
        body: {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
        "#__next": {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        },
        "#nprogress": {
          pointerEvents: "none",
        },
        "#nprogress .bar": {
          backgroundColor: palette.primary.main,
          height: 3,
          left: 0,
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 2000,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            opacity: 1,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        input: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: "24px",
          "&::placeholder": {
            color: "#ccc",
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          borderRadius: 8,
          borderStyle: "solid",
          borderWidth: 1,
          overflow: "hidden",
          borderColor: "#ccc",
          transition: muiTheme.transitions.create([
            "border-color",
            "box-shadow",
          ]),
          "&:hover": {
            backgroundColor: "#d4d4d4",
          },
          "&:before": {
            display: "none",
          },
          "&:after": {
            display: "none",
          },
          [`&.${filledInputClasses.disabled}`]: {
            backgroundColor: "transparent",
          },
          [`&.${filledInputClasses.focused}`]: {
            backgroundColor: "transparent",
            borderColor: palette.primary.main,
            boxShadow: `${palette.primary.main} 0 0 0 2px`,
          },
          [`&.${filledInputClasses.error}`]: {
            borderColor: palette.error.main,
            boxShadow: `${palette.error.main} 0 0 0 2px`,
          },
        },
        input: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: "24px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#d4d4d4",
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "#d4d4d4",
            },
          },
          [`&.${outlinedInputClasses.focused}`]: {
            backgroundColor: "transparent",
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: palette.primary.main,
              boxShadow: `${palette.primary.main} 0 0 0 2px`,
            },
          },
          [`&.${filledInputClasses.error}`]: {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: palette.error.main,
              boxShadow: `${palette.error.main} 0 0 0 2px`,
            },
          },
        },
        input: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: "24px",
        },
        notchedOutline: {
          borderColor: "#ccc",
          transition: muiTheme.transitions.create([
            "border-color",
            "box-shadow",
          ]),
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 500,
          [`&.${inputLabelClasses.filled}`]: {
            transform: "translate(12px, 18px) scale(1)",
          },
          [`&.${inputLabelClasses.shrink}`]: {
            [`&.${inputLabelClasses.standard}`]: {
              transform: "translate(0, -1.5px) scale(0.85)",
            },
            [`&.${inputLabelClasses.filled}`]: {
              transform: "translate(12px, 6px) scale(0.85)",
            },
            [`&.${inputLabelClasses.outlined}`]: {
              transform: "translate(14px, -9px) scale(0.85)",
            },
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 1.71,
          minWidth: "auto",
          paddingLeft: 0,
          paddingRight: 0,
          textTransform: "none",
          "& + &": {
            marginLeft: 24,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottomColor: palette.divider,
          padding: "15px 16px",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          borderBottom: "none",
          [`& .${tableCellClasses.root}`]: {
            borderBottom: "none",
            backgroundColor: "#ccc",
            color: "#ccc",
            fontSize: 12,
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: 0.5,
            textTransform: "uppercase",
          },
          [`& .${tableCellClasses.paddingCheckbox}`]: {
            paddingTop: 4,
            paddingBottom: 4,
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "filled",
      },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#000",
              zIndex: 0,
            },
            "&:hover fieldset": {
              border: "none",
              borderColor: COLORS.BRAND[100], // Cor da borda ao passar o mouse
            },

            "&.Mui-focused fieldset": {
              borderColor: "#000", // Cor da borda quando o campo está focado
              borderWidth: 0, // Largura da borda ao focar
            },
          },
          "& .MuiInputLabel-outlined": {
            zIndex: 1, // Define o z-index do label para ficar acima do outlined
            backgroundColor: "#fff", // Cor de fundo para evitar sobreposição do label
            padding: "0 4px", // Adiciona um espaçamento ao redor do label
          },
        },
      },
    },
  };
}
