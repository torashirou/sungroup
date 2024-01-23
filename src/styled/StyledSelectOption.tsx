import styled from "styled-components";

const StyledSelectOption = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid var(--lightgray);
  transition: all 0.3s;
  position: relative;
  z-index: 1;
  cursor: pointer;
  margin-bottom: -1px;
  background: var(--white);
  &:hover {
    border-color: var(--black);
    z-index: 2;
  }

  img {
    max-width: 50%;
  }
  span {
    font-size: 1.5rem;
    font-weight: 300;
  }
`

export default StyledSelectOption;