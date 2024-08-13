import { Box, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const CustomToggleButtton = ({ options = [], ...props }) => {
  return (
    <ToggleButtonGroup color="primary" {...props}>
      {options.map((option) => (
        <ToggleButton
          key={option.value}
          value={option.value}
          size="small"
          sx={{ display: "flex", gap: 1, alignItems: "center", textTransform: "none" }}
        >
          {option.label} {option.icon}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default CustomToggleButtton;
