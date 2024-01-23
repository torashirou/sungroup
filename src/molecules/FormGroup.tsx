import patterns from '../assets/Patterns';
import literals from '../assets/Literals';
import FormInput from '../atoms/FormInput';

function FormGroup() {
  return (
    <>
      <FormInput id="firstName" type="text" required label={literals.form.firstName} errorProp={literals.form.firstNameError} pattern={patterns.letters}/>
      <FormInput id="surname" type="text" label={literals.form.surname} errorProp={literals.form.surnameError} pattern={patterns.letters}/>
      <FormInput id="mail" type="mail" required label={literals.form.mail} errorProp={literals.form.mailError} pattern={patterns.mail}/>
      <FormInput id="phone" type="phone" required label={literals.form.phone} errorProp={literals.form.phoneError} pattern={patterns.phone}/>
      <small>{literals.form.legend}</small>
    </>
  );
}

export default FormGroup;
