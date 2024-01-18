import styled from 'styled-components';
import { theme } from '../assets/App.style';

const StyledDetails = styled.div`
  font-size: 1.3rem;
  font-weight: 200;
  display: flex;
  flex-direction: column;
  @media ${theme.mediaQueries.tablet} {
    flex-direction: row;
    margin-bottom: 48px;
  }
  span {
    display: block;
    max-width: 140px;
    margin: 0 24px 20px;
    text-align: center;
    @media ${theme.mediaQueries.tablet} {
      margin-bottom: 0;
    }
    strong {
      display: block;
    }
  }
`

export default StyledDetails;