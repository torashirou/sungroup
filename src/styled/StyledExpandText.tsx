import styled, { css } from 'styled-components';

const StyledExpandText = styled.span<{ hide?: boolean; }>`
  display: none !important;
  ${({ hide }) => hide ? css`
    display: initial !important;
  ` : ''}
`
export default StyledExpandText;