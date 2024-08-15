import { Box, Paper } from "@mui/material";

const MainContainer = ({ children, ...props }) => {
  return (
    <Box p={1}>
      <Box component={Paper} p={1} {...props}>
        {children}
      </Box>
    </Box>
  );
};

export default MainContainer;
