import literals from '../assets/Literals';
import MenuBtn, {AlternativeMenuBtn} from '../styled/MenuBtn'
import StyledMenu from '../styled/StyledMenu';

function Menu(props) {
  return (
    <StyledMenu className={`d-flex justify-content-lg-between align-items-lg-center ${props.open ? '--open' : ''}`}>
        <ul className="d-lg-flex justify-content-lg-between align-items-lg-center mb-0">
            <li><a href={literals.links.cars}>{literals.links.carsDesc}</a></li>
            <li><a href={literals.links.testRide}>{literals.links.testRideMenuDesc}</a></li>
            <li><a href={literals.links.offer}>{literals.links.offerDesc}</a></li>
            <li><a href={literals.links.salons}>{literals.links.salonsDesc}</a></li>
            <li className="d-lg-none"><a href={literals.links.phone}>{literals.links.phoneDesc}</a></li>
            <li className="d-lg-none"><MenuBtn href={literals.links.askOffer}>{literals.links.askOfferDesc}</MenuBtn></li>
            <li className="d-lg-none"><AlternativeMenuBtn href={literals.links.testRide}>{literals.links.testRideDesc}</AlternativeMenuBtn></li>
        </ul>  
    </StyledMenu>
  );
}

export default Menu;
