import { useState } from 'react'
import validate from '../assets/Validate';
import StyledFormInput from '../styled/StyledFormInput';

function FormInput(props) {
  const [active, setActive] = useState(false);
  const [error, setError] = useState(false);

  const handleInput = (e) => {
    setActive(false);
    setError(false);
    const value = e.target.value;
    if (value !== '') setActive(true);
    if (validate(e.target, props.type, setError)) props.setData(value);
  }

  return (
    <StyledFormInput active={active ? 'true' : undefined} error={error ? 'true' : undefined}>
      <input id={props.id} type={props.type} required={props.required} data-validate={props.type} onInput={handleInput} />
      <label htmlFor={props.id}>{props.label}</label>
      <small>{props.error}</small>
    </StyledFormInput>
  );
}

export default FormInput;
