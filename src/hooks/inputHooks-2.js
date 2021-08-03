import { useState } from 'react';

function CustomHooksObjectFormat(initialState) {
  const [value, setValue] = useState(initialState);

  function onChange(e) {
    setValue(e.target.value);
  }

  function showValue() {
    console.log(value);
  }

  function clearInput() {
    setValue('');
  }

  return { value, onChange, clearInput, showValue };
}

export default CustomHooksObjectFormat;
