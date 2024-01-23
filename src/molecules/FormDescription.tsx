import literals from '../assets/Literals';
import StyledFormDescription from '../styled/StyledFormDescription';
import FormCheckbox from '../atoms/FormCheckbox';
import ExpandText from '../atoms/ExpandText';

function FormDescription() {
  return (
    <StyledFormDescription>
      <span>{literals.form.shortDescription} <ExpandText>{literals.form.expandedDescription}</ExpandText> <a className="expand" href="#expand">{literals.links.more}</a><span className="d-none hidden">{literals.form.expandedDescription}<a className="hide" href="#hide">{literals.links.less}</a></span></span>
      <span>{literals.form.marketing}</span>
      <FormCheckbox id={literals.form.personalDataId} label={literals.form.personalData} />
      <FormCheckbox id={literals.form.emailId} label={literals.form.email} />
      <FormCheckbox id={literals.form.telephoneId} label={literals.form.telephone} />
      <FormCheckbox id={literals.form.smsId} label={literals.form.sms} />
      <span>{literals.form.personalRights}</span>
      <span>{literals.form.personalProcessed}</span>
      <span>{literals.form.personalAdministrator}<a href={literals.links.privacy}>{literals.links.privacy}</a></span>
    </StyledFormDescription>
  );
}

export default FormDescription;
