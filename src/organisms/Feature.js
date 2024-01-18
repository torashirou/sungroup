import StyledFeature from '../styled/StyledFeature';
import FeatureDescription from '../molecules/FeatureDescription';

function Feature(props) {
    return (
        <StyledFeature reverse={props.reverse}>
          <img src={props.feature.img} alt={props.feature.name} />
          <FeatureDescription name={props.feature.name} description={props.feature.description} reverse={props.reverse} />
        </StyledFeature>
    );
}

export default Feature;
