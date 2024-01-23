import styled from 'styled-components';
import { theme } from '../assets/App.style'

const StyledBannerContent = styled.span`
  font-size: 2rem;
  font-weight: 200;
  line-height: 1.5;
  display: block;
  @media ${theme.mediaQueries.tablet} {
    font-size: 3rem;
  }
  @media ${theme.mediaQueries.large} {
    font-size: 5.7rem;
    line-height: 6.5rem;
  }
`

export default StyledBannerContent;