import { MultiSelect } from "react-multi-select-component";

const FormMultiSelect = ({ options = [], ...props }) => {
  const customValueRenderer = (selected, _options) => {
    if (selected.length === options.length) {
      return `All item selected `;
    }
    return selected.length ? `${selected.length} Items selected` : ` -- No option selected -- `;
  };

  return <MultiSelect options={options} valueRenderer={customValueRenderer} {...props} />;
};

export default FormMultiSelect;
