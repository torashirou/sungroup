import styled from 'styled-components';
import { theme } from '../assets/App.style'

const StyledFooterLinks = styled.span`
  a {
    display: block;
    text-align: center;
    margin-bottom: 15px;
    padding: 2px 15px;
    font-size: 1.2rem;
    color: var(--text);
    @media ${theme.mediaQueries.tablet} {
      display: inline;
      border-right: 1px solid var(--lightgray);
      &:last-child {
        border: 0;
      }
    }
    &:hover {
      color: var(--text);
    }
  }
`

export default StyledFooterLinks;