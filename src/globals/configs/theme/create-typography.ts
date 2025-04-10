declare module "@mui/material/Typography" {
  interface TypographyPropsColorOverrides {
    bw: true; // Habilita "custom" no autocompletar do color
  }
}

export const createTypography = () => {
  return {
    fontFamily: "Poppins, sans-serif",
    headingXl: {
      fontSize: "clamp(32px, 1vw, 44px);",
      fontWeight: 700,
      lineHeight: "43.2px",
    },
    headingLg: {
      fontSize: "clamp(24px, 1vw, 34px);",
      fontWeight: 700,
      lineHeight: "32.4px",
    },
    button: {
      textTransform: "uppercase",
      fontWeight: 700,
      fontSize: "16px",
      letterSpacing: "3%",
      LineWeight: "24px",
      // alignSelf: 'center'
    },
    headingMd: {
      fontSize: "clamp(20px, 1vw, 30px);",
      fontWeight: 700,
      lineHeight: "27px",
    },
    headingSm: {
      fontSize: "clamp(14px, 1vw, 20px);",
      fontWeight: 600,
      lineHeight: "18.9px",
      letterSpacing: "2%",
    },
    bodyXl: {
      fontSize: "clamp(18px, 1vw, 27px)",
      fontWeight: 400,
      lineHeight: "27px",
    },
    bodyXlBold: {
      fontSize: "clamp(18px, 1vw, 27px)",
      fontWeight: 600,
      lineHeight: "27px",
    },
    bodyLg: {
      fontWeight: 400,
      fontSize: "clamp(16px, 1vw, 24px);",
      lineHeight: "24px",
    },
    bodyLgBold: {
      fontWeight: 600,
      fontSize: "clamp(16px, 1vw, 24px);",
      lineHeight: "24px",
    },
    bodyMd: {
      fontWeight: 700,
      fontSize: "clamp(16px, 1vw, 24px);",
      lineHeight: "24px",
      letterSpacing: "3%",
    },
    bodySm: {
      fontWeight: 500,
      fontSize: "clamp(14px, 1vw, 21px)",
      lineHeight: "22.4px",
    },
    bodySmBold: {
      fontWeight: 700,
      fontSize: "clamp(14px, 1vw, 21px)",
      lineHeight: "22.4px",
    },
    bodyXs: {
      fontWeight: 400,
      fontSize: "clamp(12px, 1vw, 18px)",
      lineHeight: "18px",
    },
  };
};

declare module "@mui/material/styles" {
  interface TypographyVariants {
    headingXl: React.CSSProperties;
    headingLg: React.CSSProperties;
    headingMd: React.CSSProperties;
    headingSm: React.CSSProperties;
    bodyXl: React.CSSProperties;
    bodyXlBold: React.CSSProperties;
    bodyLg: React.CSSProperties;
    bodyLgBold: React.CSSProperties;
    bodyMd: React.CSSProperties;
    bodySm: React.CSSProperties;
    bodySmBold: React.CSSProperties;
    bodyXs: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    headingXl: React.CSSProperties;
    headingLg: React.CSSProperties;
    headingMd: React.CSSProperties;
    headingSm: React.CSSProperties;
    bodyXl: React.CSSProperties;
    bodyXlBold: React.CSSProperties;
    bodyLg: React.CSSProperties;
    bodyLgBold: React.CSSProperties;
    bodyMd: React.CSSProperties;
    bodySm: React.CSSProperties;
    bodySmBold: React.CSSProperties;
    bodyXs: React.CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    headingXl: true;
    headingLg: true;
    headingMd: true;
    headingSm: true;
    bodyXl: true;
    bodyXlBold: true;
    bodyLg: true;
    bodyLgBold: true;
    bodyMd: true;
    bodySm: true;
    bodySmBold: true;
    bodyXs: true;
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    caption: false;
    body1: false;
    body2: false;
    subtitle1: false;
    subtitle2: false;
    inherit: false;
    overline: false;
  }
}
