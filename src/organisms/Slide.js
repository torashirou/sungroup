import literals from '../assets/Literals'
import StyledSlide from "../styled/StyledSlide";
import { AlternativeBtn } from "../styled/Btn";
import SlideDetails from "../molecules/SlideDetails";

function Slide(props) {
    return (
      <StyledSlide active={props.active}>
        <h3>{props.car.name}</h3>
        <img src={props.car.img} alt={props.car.name}/>
        <small>{props.car.description}</small>
        <SlideDetails leasing={props.car.leasing} installment={props.car.installment} brutto={props.car.brutto} />
        <AlternativeBtn href={literals.links.testRide}>{literals.links.testRideDesc}</AlternativeBtn>
      </StyledSlide>
    )
}

export default Slide;
