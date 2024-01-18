import instagram from '../assets/img/instagram.png'
import vimeo from '../assets/img/vimeo.png'
import literals from '../assets/Literals';
import StyledSocial from '../styled/StyledSocial';

function Social() {
  return (
    <StyledSocial>
      <a href={literals.links.instagram}><img src={instagram} alt={literals.links.instagram} /></a>
      <a href={literals.links.vimeo}><img src={vimeo} alt={literals.links.vimeo} /></a>
    </StyledSocial>
  );
}

export default Social;
