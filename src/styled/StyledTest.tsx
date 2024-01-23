import styled from 'styled-components';
import { theme } from '../assets/App.style'

const StyledTest = styled.div`
  background: var(--darkbg);
  color: var(--white);
  padding-bottom: 30px;
  @media ${theme.mediaQueries.desktop} {
    padding-bottom: 104px
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 200;
    line-height: 1.5;
    display: block;
    margin-top: 20px;
    text-transform: uppercase;
    margin-bottom: 15px;
    @media ${theme.mediaQueries.tablet} {
      font-size: 3rem;
      margin-top: 30px;
    }
    @media ${theme.mediaQueries.large} {
      font-size: 5.7rem;
      line-height: 6.5rem;
      margin-top: 100px;
    }
    & + span {
      opacity: 0.5;
      font-size: 1.3rem;
      font-weight: 300;
      line-height: 2.5rem;
      display: block;
      margin-bottom: 20px;
      @media ${theme.mediaQueries.tablet} {
        max-width: 65%;
        margin-bottom: 30px;
        font-size: 1.9rem;
      }
      @media ${theme.mediaQueries.wide} {
        max-width: 45%;
        margin-bottom: 68px;
      }
    }
  }

  img {
    display: block;
    margin-bottom: 15px;
    max-width: 100%;
    @media ${theme.mediaQueries.desktop} {
      margin-bottom: 32px;
    }
    & + small {
      font-size: 1.5rem;
      opacity: 0.5;
      display: block;
      margin-bottom: 32px;
    }
  }

  a {
    margin-top: 32px;
  }
`

export default StyledTest;