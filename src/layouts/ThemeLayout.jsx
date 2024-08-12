"use client";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/theme/theme";

const ThemeLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container fixed>{children}</Container>
    </ThemeProvider>
  );
};

export default ThemeLayout;
