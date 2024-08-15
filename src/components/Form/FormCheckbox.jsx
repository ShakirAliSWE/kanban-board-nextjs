import { Box, Checkbox, FormControlLabel } from "@mui/material";

const FormCheckbox = ({ options = [], ...props }) => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          control={<Checkbox size="small" />}
          label={option.label}
          {...props}
        />
      ))}
    </Box>
  );
};

export default FormCheckbox;
