import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

const FormRadioGroup = ({ options = [], ...props }) => {
  return (
    <RadioGroup name={props.name || "no-name"} {...props}>
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          control={<Radio size="small" />}
          label={option.label}
        />
      ))}
    </RadioGroup>
  );
};

export default FormRadioGroup;
