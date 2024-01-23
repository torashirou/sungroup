import React, { useState } from 'react'
import { useFormContext } from "react-hook-form";
import StyledFormInput from '../styled/StyledFormInput';

interface FormInputProps {
  id: string;
  type: string;
  required?: boolean;
  label: string;
  errorProp: string;
  pattern: RegExp;
}

function FormInput({ id, type, required, label, errorProp, pattern }: FormInputProps) {
  const { register, formState: { errors } } = useFormContext()

  const [active, setActive] = useState(false);

  const handleInput = (e: React.ChangeEvent) => {
    setActive(false);
    const value = (e.target as HTMLInputElement).value;
    if (value !== '') setActive(true);
  }

  return (
    <StyledFormInput active={active}>
      <input id={id} type={type} {...register(id, { required: required, pattern: pattern })} onInput={(event: React.ChangeEvent<HTMLInputElement>) => handleInput(event)} />
      <label htmlFor={id}>{label}</label>
      <small>{errors[id] && errorProp}</small>
    </StyledFormInput>
  );
}

export default FormInput;
