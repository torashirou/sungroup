import StyledFeature from '../styled/StyledFeature';
import FeatureDescription from '../molecules/FeatureDescription';

interface FeatureProps {
  reverse: boolean;
  feature: {
    img: string;
    name: string;
    description: string;
  }
}

function Feature({ reverse, feature}: FeatureProps) {
    return (
        <StyledFeature reverse={reverse}>
          <img src={feature.img} alt={feature.name} />
          <FeatureDescription name={feature.name} description={feature.description} reverse={reverse} />
        </StyledFeature>
    );
}

export default Feature;
