import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const FormDatePicker = ({ name, value, ...props }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          name={name}
          value={dayjs(value)}
          sx={{ width: "100%" }}
          slotProps={{ textField: { size: "small" } }}
          {...props}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default FormDatePicker;
