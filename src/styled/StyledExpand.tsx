import styled, { css } from 'styled-components';

const StyledExpand = styled.a<{ hide?: boolean; }>`
${({ hide }) => hide ? css`
  display: none !important;
  ` : ''}
`;

export default StyledExpand;