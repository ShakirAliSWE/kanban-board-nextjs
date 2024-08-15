import { Box } from "@mui/material";

const BorderContainer = ({ children, ...props }) => {
  return (
    <Box border={1} borderRadius={2} p={1} borderColor={"#9EA2B4"} mb={2} {...props}>
      {children}
    </Box>
  );
};

export default BorderContainer;
