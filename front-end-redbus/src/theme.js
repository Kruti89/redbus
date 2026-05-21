import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#c80000",
      light: "#e74c3c",
      dark: "#a00000",
    },
    secondary: {
      main: "#f39c12",
      light: "#f8b739",
      dark: "#d68910",
    },
    success: {
      main: "#27ae60",
    },
    error: {
      main: "#e74c3c",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#333333",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#333333",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 700,
      color: "#333333",
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 600,
      color: "#333333",
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 600,
      color: "#333333",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "#555555",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      color: "#666666",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      fontSize: "1rem",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: "4px",
        padding: "10px 24px",
        fontSize: "1rem",
        fontWeight: 600,
        textTransform: "none",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
        },
      },
      containedPrimary: {
        background: "linear-gradient(135deg, #c80000 0%, #e74c3c 100%)",
        color: "#fff",
        "&:hover": {
          background: "linear-gradient(135deg, #a00000 0%, #c80000 100%)",
        },
      },
      containedSecondary: {
        background: "linear-gradient(135deg, #f39c12 0%, #f8b739 100%)",
        color: "#fff",
      },
      outlined: {
        borderWidth: "2px",
        "&:hover": {
          borderWidth: "2px",
        },
      },
    },
    MuiCard: {
      root: {
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
        },
      },
    },
    MuiTextField: {
      root: {
        "& .MuiOutlinedInput-root": {
          borderRadius: "4px",
          fontSize: "1rem",
        },
      },
    },
    MuiInput: {
      root: {
        fontSize: "1rem",
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
});

export default theme;