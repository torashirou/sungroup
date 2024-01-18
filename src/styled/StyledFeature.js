import styled, { css } from 'styled-components';
import { theme } from '../assets/App.style';

const StyledFeature = styled.div`
    margin-bottom: 30px;
    position: relative;
    @media ${theme.mediaQueries.tablet} {
      margin-bottom: 75px;
    }
    @media ${theme.mediaQueries.wide} {
      margin-bottom: 159px;
    }
    &:last-child {
      margin-bottom: 30px;
    }

    img {
      max-width: 100%;
      display: block;
      margin-bottom: 20px;
      @media ${theme.mediaQueries.tablet} {
        max-width: 60%;
        margin-bottom: 0;
      }
    }

    ${({ reverse }) => reverse ? css`
      display: flex;
      flex-direction: column;
      @media ${theme.mediaQueries.tablet} {
          flex-direction: row;
      }
      img {
          margin-left: auto;
      }
    ` : ''}
`

export default StyledFeature;