import styled from 'styled-components';
import { theme } from '../assets/App.style';

const StyledSlider = styled.div`
  overflow: hidden;
  background: var(--lightbg);
  position: relative;
  padding: 30px 0;
  color: var(--black);
  @media ${theme.mediaQueries.wide} {
    padding: 50px 0;
  }
  @media ${theme.mediaQueries.large} {
    padding: 104px 0;
  }
  .slider {
    display: flex;
    transition: all 0.3s ease;
  }
`

export default StyledSlider;