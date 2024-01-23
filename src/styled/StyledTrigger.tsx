
import styled, { css } from 'styled-components';

const StyledTrigger = styled.a<{ open?: boolean; }>`
  border: 1px solid var(--lightgray);
  position: absolute;
  padding: 10px;
  background: var(--white);
  right: 15px;
  z-index: 99;

  ${({ open }) => open ? css`
    position: fixed;
    right: calc(80vw - 1px);
    ` : ''}`;

export default StyledTrigger;