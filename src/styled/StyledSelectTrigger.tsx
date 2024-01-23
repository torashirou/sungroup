import styled, { css } from 'styled-components';
import toggler from '../assets/img/toggler.png';

const StyledSelectTrigger = styled.div<{ active?: boolean; }>`
  display: flex;
  align-items: center;
  border: 1px solid var(--lightgray);
  transition: all 0.3s;
  position: relative;
  z-index: 1;
  cursor: pointer;
  padding: 15px 0;
  &:hover {
    border-color: var(--black);
    z-index: 2;
  }
  &:after {
    content: url(${toggler});
    margin-left: auto;
    margin-right: 20px;
  }
  ${({ active }) => active ? css`
    &:after {
      transform: rotateZ(180deg);
    }
    ` : ''}

  img {
    max-width: 50%;
  }
  span {
    font-size: 1.5rem;
    font-weight: 300;
  }
`

export default StyledSelectTrigger;