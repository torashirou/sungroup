import styled from 'styled-components';
import literals from '../assets/Literals';
import FormInput from '../atoms/FormInput';

const StyledFormGroup = styled.div`
  width: 80%;
  margin: 0 auto 48px;

  & > small {
    font-size: 1.3rem;
    font-weight: 200;
    margin: -10px 0 0;
    display: block;
    text-align: left;
  }
`;

function FormGroup(props) {
  return (
    <StyledFormGroup>
      <FormInput id="first_name" type="text" required label={literals.form.firstName} error={literals.form.firstNameError} setData={props.setFirstName}/>
      <FormInput id="surname" type="text" label={literals.form.surname} error={literals.form.surnameError} setData={props.setSurname}/>
      <FormInput id="mail" type="mail" required label={literals.form.mail} error={literals.form.mailError} setData={props.setMail}/>
      <FormInput id="phone" type="phone" required label={literals.form.phone} error={literals.form.phoneError} setData={props.setPhone}/>
      <small>{literals.form.legend}</small>
    </StyledFormGroup>
  );
}

export default FormGroup;
