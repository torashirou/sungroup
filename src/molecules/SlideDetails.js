import literals from '../assets/Literals'
import StyledDetails from '../styled/StyledDetails';

function SlideDetails(props) {
    return (
      <StyledDetails>
        <span>{props.leasing}</span>
        <span>{literals.slider.installment}<strong>{props.installment}</strong></span>
        <span>{literals.slider.brutto}<strong>{props.brutto}</strong></span>  
      </StyledDetails>
    )
}

export default SlideDetails;
