import { useFormContext } from "react-hook-form";
import StyledFormCheckbox from '../styled/StyledFormCheckbox';

interface FormCheckboxProps {
  id: string;
  label: string;
}

function FormCheckbox({ id, label }: FormCheckboxProps) {
  const { register, setValue } = useFormContext()

  const handleChange = (e: React.ChangeEvent) => {
    const value = (e.target as HTMLInputElement).checked;
    setValue(id, value);
  }

  return (
    <StyledFormCheckbox>
      <input id={id} value="true" type="checkbox" {...register(id)} onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)} />
      <label htmlFor={id}>{label}</label>
    </StyledFormCheckbox>
  );
}

export default FormCheckbox;
