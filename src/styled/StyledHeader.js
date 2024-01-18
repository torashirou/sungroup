import styled from 'styled-components';
import { theme } from '../assets/App.style'

const StyledHeader = styled.header`
  padding: 18px 0;
  border-bottom: 1px solid var(--lightgray);
  font-size: 1.4rem;
  font-weight: 200;
  background: var(--lightbg);
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 10;
  
  @media ${theme.mediaQueries.desktop} {
    position: static;
    border: 0;
    font-size: 1.2rem;
  }
  @media ${theme.mediaQueries.large} {
    font-size: 1.5rem;
  }

  & > div > a.d-none {
    margin: 0 12px;
    padding: 5px 15px;
    @media ${theme.mediaQueries.wide} {
      padding: 12px 27px;
    }
    &[href^="tel:"] {
      padding: 0;
      color: var(--text);
      font-weight: 500;
      border: 0;
      @media ${theme.mediaQueries.wide} {
        margin-right: 35px;
      }
      &:hover {
        color: var(--text);
      }
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

export default StyledHeader;