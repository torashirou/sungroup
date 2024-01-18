import StyledFeatureDescription from "../styled/StyledFeatureDescription";
import literals from "../assets/Literals";
import { WhiteBtn } from "../styled/Btn";

function FeatureDescription(props) {
    return (
        <StyledFeatureDescription reverse={props.reverse}>
          <h4>{props.name}</h4>
          <span>{props.description}</span>
          <WhiteBtn href={literals.links.testRide}>{literals.links.testRideDesc}</WhiteBtn>
        </StyledFeatureDescription>  
    );
}

export default FeatureDescription;
