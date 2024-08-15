"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import MainContainer from "@/components/Form/MainContainer";
import theme from "@/theme/theme";

const ThemeLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainContainer>{children}</MainContainer>
    </ThemeProvider>
  );
};

export default ThemeLayout;
