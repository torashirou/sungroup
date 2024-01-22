import StyledFormCheckbox from '../styled/StyledFormCheckbox';

interface FormCheckboxProps {
  id: string;
  label: string;
  setData: Function;
}

function FormCheckbox( { id, label, setData }: FormCheckboxProps) {
  const handleChange = (e: React.ChangeEvent) => {
    const value = (e.target as HTMLInputElement).checked;
    console.log(value);
    setData(value);
  }

  return (
    <StyledFormCheckbox>
      <input type="checkbox" id={id} onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}/>
      <label htmlFor={id}>{label}</label>
    </StyledFormCheckbox>
  );
}

export default FormCheckbox;
