import literals from '../assets/Literals'
import StyledSlide from "../styled/StyledSlide";
import { AlternativeBtn } from "../styled/Btn";
import SlideDetails from "../molecules/SlideDetails";

interface SlideProps {
  active: boolean;
  car: {
    name: string,
    img: string,
    description: string,
    leasing: string,
    installment: string,
    brutto: string
  }
}

function Slide({ active, car } : SlideProps) {
    return (
      <StyledSlide active={active}>
        <h3>{car.name}</h3>
        <img src={car.img} alt={car.name}/>
        <small>{car.description}</small>
        <SlideDetails leasing={car.leasing} installment={car.installment} brutto={car.brutto} />
        <AlternativeBtn href={literals.links.testRide}>{literals.links.testRideDesc}</AlternativeBtn>
      </StyledSlide>
    )
}

export default Slide;
