import { Box, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { GoDot } from "react-icons/go";

const ContextMenuItem = ({ title, icon, onClick }) => {
  return (
    <MenuItem onClick={onClick}>
      <Box display={"flex"} alignItems={"center"} gap={1} width={120}>
        {icon || <GoDot />}
        <Typography variant="body2">{title}</Typography>
      </Box>
    </MenuItem>
  );
};

export default ContextMenuItem;
