import styled, { css } from 'styled-components';
import { theme } from '../assets/App.style';

const StyledSlide = styled.div`
  width: 60vw;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  ${({ active }) => active ? css`
    opacity: 1;
  ` : ''}
  h3 {
    font-size: 2.5rem;
    font-weight: 300;
    @media ${theme.mediaQueries.desktop} {
      font-size: 4.7rem;
    }
  }
  img {
    display: block;
    max-width: 100%;
    margin: 30px auto 20px;
    @media ${theme.mediaQueries.desktop} {
      margin: 76px auto 40px;
    }
  }
  small {
    font-size: 1.3rem;
    font-weight: 200;
    margin-bottom: 20px;
    @media ${theme.mediaQueries.tablet} {
      margin-bottom: 48px;
    }
  }
`

export default StyledSlide;