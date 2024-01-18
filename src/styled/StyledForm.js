import styled from 'styled-components';
import { theme } from '../assets/App.style';

const StyledForm = styled.form`
  color: var(--text);
  text-align: center;
  @media ${theme.mediaQueries.desktop} {
    width: 50%;
    margin: 0 auto;
  }
  
  & > small {
    display: block;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 200;
    margin-bottom: 10px;
    color: var(--black);
  }

  h2 {
    text-align: center;
    max-width: 60%;
    margin: 0 auto 64px;
    color: var(--black);
    display: block;
    font-weight: 200;
    font-size: 1.3rem;
    margin-bottom: 20px;
    @media ${theme.mediaQueries.tablet} {
      font-size: 2rem;
    }
    @media ${theme.mediaQueries.desktop} {
      font-size: 2.5rem;
    }
    @media ${theme.mediaQueries.wide} {
      font-size: 3.4rem;
      line-height: 4.6rem;
      margin-bottom: 48px;
    }
  }
`;

export default StyledForm;