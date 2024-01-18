import literals from '../assets/Literals';
import { GrayBtn } from '../styled/Btn';
import StyledTest from '../styled/StyledTest';
import TestLeftColumn from '../molecules/TestLeftColumn';
import TestRightColumn from '../molecules/TestRightColumn';

function Test() {
  return (
    <StyledTest>
        <div className="container d-flex flex-column align-items-start">
          <h2>{literals.test.title}</h2>
          <span>{literals.test.titleDescription}</span>
          <div className="row flex-column-reverse flex-lg-row">
            <TestLeftColumn />
            <TestRightColumn />
          </div>
          <GrayBtn href={literals.links.testRide}>{literals.links.testRideDesc}</GrayBtn>
        </div>
      </StyledTest>
  );
}

export default Test;
