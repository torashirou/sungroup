import styled, { css } from 'styled-components';
import { theme } from '../assets/App.style'

const StyledHeader = styled.nav<{ open?: boolean; }>`
  position: fixed;
  z-index: 99;
  width: 80vw;
  height: 100vh;
  top: 0;
  right: -80vw;
  border-left: 1px solid var(--lightgray);
  background: var(--white);
  transition: all 0.3s;
  ${({ open }) => open ? css`
    right: 0;
    a {
      text-decoration: none;
    }
    ` : ''}
  @media ${theme.mediaQueries.desktop} {
    background: transparent;
    position: static;
    width: auto;
    height: auto;
    border-left: 0;
  }
  @media ${theme.mediaQueries.wide} {
    margin-left: 40px;
  }
  @media ${theme.mediaQueries.large} {
    margin-left: 80px;
  }

  & ul {
    list-style: none;
    padding: 0;
    width: 100%;
    a {
      display: block;
      border-bottom: 1px solid var(--lightgray);
      padding: 10px 20px;
      transition: all 0.3s;
      color: var(--text);
      &:hover {
        background: var(--lightgray);
        color: var(--text);
      }

      @media ${theme.mediaQueries.desktop} {
        display: inline;
        border: 0;
        padding: 0 10px;
        &:hover {
          background: transparent;
        }
      }

      @media ${theme.mediaQueries.large} {
        padding: 0 16px;
      }
    }
  }
`;

export default StyledHeader;