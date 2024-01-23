import StyledFeatureDescription from "../styled/StyledFeatureDescription";
import literals from "../assets/Literals";
import { WhiteBtn } from "../styled/Btn";

interface FeatureDescriptionProps {
  reverse: boolean;
  name: string;
  description: string;
}

function FeatureDescription({ reverse, name, description }: FeatureDescriptionProps) {
    return (
        <StyledFeatureDescription reverse={reverse}>
          <h4>{name}</h4>
          <span>{description}</span>
          <WhiteBtn href={literals.links.testRide}>{literals.links.testRideDesc}</WhiteBtn>
        </StyledFeatureDescription>  
    );
}

export default FeatureDescription;
