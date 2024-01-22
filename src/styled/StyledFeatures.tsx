import styled from 'styled-components';
import { theme } from '../assets/App.style';

const StyledFeatures = styled.div`
  background: var(--darkbg);
  color: var(--white);
  padding-top: 75px;
  @media ${theme.mediaQueries.desktop} {
    padding-bottom: 66px;
  }
  @media ${theme.mediaQueries.wide} {
    padding-top: 173px;
  }
`

export default StyledFeatures;