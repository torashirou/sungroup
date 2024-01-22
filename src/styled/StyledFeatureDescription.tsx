import styled, { css } from 'styled-components';
import { theme } from '../assets/App.style';

const StyledFeatureDescription = styled.div<{ reverse?: boolean; }>`
    background: var(--darkbg);
    padding: 0 0 30px;
    @media ${theme.mediaQueries.tablet} {
      position: absolute;
      z-index: 1;
      right: 0;
      top: 0;
      max-width: 50%;
      padding: 0 30px 30px;
    }
    @media ${theme.mediaQueries.desktop} {
      padding: 0 75px 30px;
    }
    @media ${theme.mediaQueries.wide} {
      padding: 0 117px 64px;
      max-width: 60%;
    }
    @media ${theme.mediaQueries.large} {
      max-width: 50%;
    }

    h4 {
      font-size: 1.4rem;
      font-weight: 200;
      margin: 5px 0 15px;
    }

    span {
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

    ${({ reverse }) => reverse ? css`
        right: auto;
        left: 0;
        @media ${theme.mediaQueries.tablet} {
            left: 86px;
        }
    ` : ''}
`

export default StyledFeatureDescription;