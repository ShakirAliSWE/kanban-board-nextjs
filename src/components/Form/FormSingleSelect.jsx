import Select from "react-select";

const FormSingleSelect = ({ options = [], ...props }) => {
  return <Select options={options} placeholder=" -- No option selected --" {...props} />;
};

export default FormSingleSelect;
