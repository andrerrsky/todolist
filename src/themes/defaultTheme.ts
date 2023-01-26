const defaultTheme = {
  breakpoints: {
    xs: "321px",
    sm: "576px",
    md: "767px",
    lg: "991px",
    xl: "1104px",
  },
  colors: {
    black: "#000000",
    primary: "#F93A0B",
    secondary: {
      dark: "#1D5297",
      light: "#7CB8E9",
      primary: "#2E93EE",
      variant: "#5582B4",
    },
    white: {
      dark: "#F8F8F8",
      primary: "#ffffff",
    },
    gray: {
      dark: "#464646",
      light: "#96A0AF",
      primary: "#F6F6F6",
      variant: "#E5E7EB",
    },
    success: {
      dark: "#2CA26E",
      light: "#BAE6D3",
      primary: "#30B47A",
    },
    error: {
      dark: "#DA4336",
      light: "#F16A5E",
      primary: "#FC3C2B",
    },
    danger: {
      dark: "#F67922",
      light: "#FFA464",
      primary: "#FF9442",
    },
    info: {
      dark: "#2C7BE5",
      light: "#A6C8FF",
      primary: "#3B8BFF",
    },
    warning: {
      dark: "#EEC100",
      light: "#FAE694",
      primary: "#FFCF00",
      variant: "#C7B675",
    },
  },
  font: {
    sizes: {
      xxxs: "11px",
      xxs: "12px",
      xs: "13px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "22px",
      xxl: "26px",
      xxxl: "28px",
    },
    weights: {
      regular: 400,
      bold: 700,
    },
  },
  layers: {
    base: 0,
    header: 20,
    toast: 25,
    overlay: 30,
    modal: 40,
    awaysOnTop: 50,
  },
} as const;

export default defaultTheme;
