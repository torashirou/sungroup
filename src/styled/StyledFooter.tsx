import styled from 'styled-components';
import { theme } from '../assets/App.style'

const StyledFooter = styled.footer`
  padding: 20px 0;
  border-top: 1px solid var(--lightgray);
  font-size: 1.4rem;
  font-weight: 200;

  @media ${theme.mediaQueries.desktop} {
    padding: 46px 0;
  }
  
  span {
    margin-bottom: 15px;
    @media ${theme.mediaQueries.tablet} {
      margin-bottom: 0;
    }
  }
`;

export default StyledFooter;