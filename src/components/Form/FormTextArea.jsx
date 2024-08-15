import { TextField } from "@mui/material";

const FormTextArea = (props) => {
  return <TextField size="small" fullWidth minRows={3} multiline {...props} />;
};

export default FormTextArea;
