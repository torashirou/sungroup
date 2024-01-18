import literals from '../assets/Literals';
import Btn, { AlternativeBtn } from '../styled/Btn';

function Options() {
  return (
    <>
      <a href={literals.links.phone} className="d-none d-lg-block ml-auto">{literals.links.phoneDesc}</a>
      <Btn href={literals.links.askOffer} className="d-none d-lg-block">{literals.links.askOfferDesc}</Btn>
      <AlternativeBtn href={literals.links.testRide} className="d-none d-lg-block">{literals.links.testRideDesc}</AlternativeBtn>
    </>
  );
}

export default Options;
