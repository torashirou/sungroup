import styled, { css } from 'styled-components';

const StyledExpand = styled.a`
${({ hide }) => hide ? css`
  display: none !important;
  ` : ''}
`;

export default StyledExpand;