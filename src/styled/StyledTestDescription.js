import styled from 'styled-components';
import { theme } from '../assets/App.style'

const StyledTestDescription = styled.div`
  h3 {
    font-size: 1.3rem;
    font-weight: 200;
    line-height: 1.5;
    display: block;
    margin-top: 20px;
    text-transform: uppercase;
    margin-bottom: 15px;
    @media ${theme.mediaQueries.tablet} {
      font-size: 2.5rem;
      margin-top: 35px;
    }
    @media ${theme.mediaQueries.desktop} {
      font-size: 2.5rem;
      margin-top: 75px;
      margin-bottom: 5px;
    }
    @media ${theme.mediaQueries.large} {
      font-size: 3.9rem;
      margin-top: 158px;
    }
  }
  span {
    opacity: 0.5;
    font-size: 1.2rem;
    font-weight: 300;
    display: block;
    line-height: 2.5rem;
    @media ${theme.mediaQueries.tablet} {
      font-size: 1.9rem;
    }
    @media ${theme.mediaQueries.large} {
      width: 70%;
    }
  }
`

export default StyledTestDescription;