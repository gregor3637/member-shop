import React, { useEffect } from "react";

import { useField } from "formik";
import Select from "react-select";

function SelectInput({ label, options, ...props }) {
  // eslint-disable-next-line
  const [field, _, { setValue, setTouched }] = useField(props);

  const onChange = (value) => {
    const val = value.map((o) => o.value);
    setValue(val);
  };

  
  useEffect(() => {
    console.log(field);  
    if (field.value && field.value.length > 0) {
      const values = field.value.map((o) => o.value);
      setValue(values);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Select
      defaultValue={field.value}
      options={options}
      onChange={onChange}
      onBlur={setTouched}
      isMulti={props.isMulti}
      placeholder={props.placeholder}
    />
  );
}
export default SelectInput;
