import React from "react";

import FormDatePicker from "./FormDatePicker";
import FormTextInput from "./FormTextInput";
import FormTextArea from "./FormTextArea";
import FormRadioGroup from "./FormRadioGroup";
import FormCheckbox from "./FormCheckbox";
import FormDropDown from "./FormDropDown";

const FormQuestions = ({ type, options = [], ...props }) => {
  const name = props.name || "no-name";

  switch (type) {
    case "text":
    case "number":
    case "email":
      return <FormTextInput type={type} name={name} />;
    case "textarea":
      return <FormTextArea name={name} />;
    case "radio":
      return <FormRadioGroup name={name} options={options} />;
    case "checkbox":
      return <FormCheckbox name={name} options={options} />;
    case "select":
      return <FormDropDown name={name} options={options} />;
    case "date":
      return <FormDatePicker name={name} />;
    default:
      return <Typography color={"error"}>Unsupported question type</Typography>;
  }
};

export default FormQuestions;
