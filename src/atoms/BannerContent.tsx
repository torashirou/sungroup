import literals from '../assets/Literals';
import StyledBannerContent from '../styled/StyledBannerContent';

function BannerContent() {
  return (
    <StyledBannerContent>
      {literals.banner.descriptionLine1}<br />
      {literals.banner.descriptionLine2}<br />
      {literals.banner.descriptionLine3}
  </StyledBannerContent>
  );
}

export default BannerContent;
