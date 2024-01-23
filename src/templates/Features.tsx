import mockedFeaturesData from '../assets/MockedFeaturesData';
import StyledFeatures from '../styled/StyledFeatures';
import Feature from '../organisms/Feature';

function Features() {
  return (
    <StyledFeatures>
      <div className="container d-flex flex-column">
        {mockedFeaturesData.map((feature, i) => <Feature reverse={i % 2 === 0 ? false : true} feature={feature} key={i} />)}
      </div>  
    </StyledFeatures>
  );
}

export default Features;
