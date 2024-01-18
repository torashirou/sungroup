import literals from '../assets/Literals';
import StyledFooterLinks from '../styled/StyledFooterLinks';

function FooterLinks() {
  return (
    <StyledFooterLinks>
      <a href={literals.links.information}>{literals.links.informationDesc}</a>
      <a href={literals.links.cookie}>{literals.links.cookieDesc}</a>
    </StyledFooterLinks>
  );
}

export default FooterLinks;
