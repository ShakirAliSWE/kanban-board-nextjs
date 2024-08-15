import { MenuItem, Select } from "@mui/material";

const FormDropDown = ({ options, ...props }) => {
  return (
    <Select size="small" fullWidth {...props}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default FormDropDown;
