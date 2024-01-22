import literals from '../assets/Literals';
import StyledFormGroup from '../styled/StyledFormGroup';
import FormInput from '../atoms/FormInput';

interface FormGroupProps {
  setFirstName: Function;
  setSurname: Function;
  setMail: Function;
  setPhone: Function;
}

function FormGroup( { setFirstName, setSurname, setMail, setPhone }: FormGroupProps) {
  return (
    <StyledFormGroup>
      <FormInput id="first_name" type="text" required label={literals.form.firstName} errorProp={literals.form.firstNameError} setData={setFirstName}/>
      <FormInput id="surname" type="text" label={literals.form.surname} errorProp={literals.form.surnameError} setData={setSurname}/>
      <FormInput id="mail" type="mail" required label={literals.form.mail} errorProp={literals.form.mailError} setData={setMail}/>
      <FormInput id="phone" type="phone" required label={literals.form.phone} errorProp={literals.form.phoneError} setData={setPhone}/>
      <small>{literals.form.legend}</small>
    </StyledFormGroup>
  );
}

export default FormGroup;
