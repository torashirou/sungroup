import styled, { css } from 'styled-components';
import { theme } from '../assets/App.style';
import prev from '../assets/img/prev.png'
import next from '../assets/img/next.png'

const StyledArrow = styled.a`
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  top: calc(50% - 25px);
  background: var(--white) no-repeat center center;
  transition: all 0.3s;
  ${({ previous }) => previous ? css`
    background-image: url(${prev});
    left: calc(20vw - 50px);
    @media ${theme.mediaQueries.tablet} {
      left: calc(20vw - 25px);
    }
  ` : `
    background-image: url(${next});
    right: calc(20vw - 50px);
    @media ${theme.mediaQueries.tablet} {
      right: calc(20vw - 25px);
    }
  `}
  &:hover {
    background-color: var(--gray);
  }
  ${({ inactive }) => inactive ? css`
    opacity: 0;
    cursor: default;
  ` : ''}
`

export default StyledArrow;