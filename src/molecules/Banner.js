import literals from '../assets/Literals';
import StyledBanner from '../styled/StyledBanner';
import { GrayBtn } from '../styled/Btn';
import BannerContent from '../atoms/BannerContent';

function Banner() {
  return (
    <StyledBanner>
        <div className="container d-flex flex-column justify-content-end align-items-start">
            <h1>{literals.banner.title}</h1>
            <BannerContent />
            <GrayBtn href={literals.links.testRide}>{literals.links.testRideBannerDesc}</GrayBtn>
        </div>  
    </StyledBanner>
  );
}

export default Banner;
