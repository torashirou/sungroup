
import styled from 'styled-components';

const StyledTrigger = styled.a`
  border: 1px solid var(--lightgray);
  position: absolute;
  padding: 10px;
  background: var(--white);
  right: 15px;
  z-index: 99;

  &.--open {
    position: fixed;
    right: calc(80vw - 1px);
  }`;

export default StyledTrigger;