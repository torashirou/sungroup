import styled from 'styled-components';
import literals from '../assets/Literals';
import FormCheckbox from '../atoms/FormCheckbox';
import ExpandText from '../atoms/ExpandText';

const StyledFormDescription = styled.div`
  text-align: left;
  font-size: 1.3rem;
  font-weight: 300;

  span {
    display: block;
    margin-bottom: 24px;
    span {
      display: inline;
    }
  }
  
  a {
    color: var(--text);
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
`;

function FormDescription(props) {
  return (
    <StyledFormDescription>
      <span>{literals.form.shortDescription} <ExpandText>{literals.form.expandedDescription}</ExpandText> <a class="expand" href="#expand">{literals.form.more}</a><span class="d-none hidden">{literals.form.expandedDescription}<a class="hide" href="#hide">{literals.form.less}</a></span></span>
      <span>{literals.form.marketing}</span>
      <FormCheckbox id={literals.form.personalDataId} label={literals.form.personalData} setData={props.setCheckboxPersonal} />
      <FormCheckbox id={literals.form.emailId} label={literals.form.email} setData={props.setCheckboxMail} />
      <FormCheckbox id={literals.form.telephoneId} label={literals.form.telephone} setData={props.setCheckboxPhone} />
      <FormCheckbox id={literals.form.smsId} label={literals.form.sms} setData={props.setCheckboxSms} />
      <span>{literals.form.personalRights}</span>
      <span>{literals.form.personalProcessed}</span>
      <span>{literals.form.personalAdministrator}<a href={literals.links.privacy}>{literals.links.privacy}</a></span>
    </StyledFormDescription>
  );
}

export default FormDescription;
