import styled, { css } from 'styled-components';

const StyledSelectList = styled.ul<{ active?: boolean; }>`
  padding: 0;
  list-style: none;
  position: absolute;
  top: calc(100% - 1px);
  display: none;
  
  ${({ active }) => active ? css`
    display: block;
    ` : ''}
`

export default StyledSelectList;