import React, { useState } from 'react'
import validate from '../assets/Validate';
import StyledFormInput from '../styled/StyledFormInput';

interface FormInputProps {
  id: string;
  type: string;
  required?: boolean;
  label: string;
  errorProp: string;
  setData: Function;
}

function FormInput( { id, type, required, label, errorProp, setData }: FormInputProps) {
  const [active, setActive] = useState(false);
  const [error, setError] = useState(false);

  const handleInput = (e: React.ChangeEvent) => {
    setActive(false);
    setError(false);
    const value = (e.target as HTMLInputElement).value;
    if (value !== '') setActive(true);
    if (validate((e.target as HTMLInputElement), type, setError)) setData(value);
  }

  return (
    <StyledFormInput active={active} error={error}>
      <input id={id} type={type} required={required} data-validate={type} onInput={(event: React.ChangeEvent<HTMLInputElement>) => handleInput(event)} />
      <label htmlFor={id}>{label}</label>
      <small>{errorProp}</small>
    </StyledFormInput>
  );
}

export default FormInput;
