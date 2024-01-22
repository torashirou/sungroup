import styled from 'styled-components';
import { theme } from '../assets/App.style';

const StyledFormWrapper = styled.div`
  background: var(--lightbg);
  padding: 30px 0;

  @media ${theme.mediaQueries.desktop} {
    padding: 104px 0;
  }
`;

export default StyledFormWrapper;