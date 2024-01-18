import styled from 'styled-components';

const StyledFormCheckbox = styled.div`
  margin-bottom: 24px;
  cursor: pointer;

  label {
    position: relative;
    padding-left: 32px;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 20px;
      height: 20px;
      border: 1px solid var(--lightgray);
    }

    &:after {
      position: absolute;
      top: 4px;
      left: 4px;
      display: block;
      width: 12px;
      height: 12px;
      background: var(--checkbox);
    }
  }

  input {
    display: none;
    &:checked + label {
      &:after {
        content: '';
      }
    }
  }
`;

export default StyledFormCheckbox;