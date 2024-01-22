import literals from '../assets/Literals'
import StyledDetails from '../styled/StyledDetails';

interface SlideDetailsProps {
  leasing: string;
  installment: string;
  brutto: string;
}

function SlideDetails({ leasing, installment, brutto }: SlideDetailsProps) {
    return (
      <StyledDetails>
        <span>{leasing}</span>
        <span>{literals.slider.installment}<strong>{installment}</strong></span>
        <span>{literals.slider.brutto}<strong>{brutto}</strong></span>  
      </StyledDetails>
    )
}

export default SlideDetails;
