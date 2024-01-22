import styled, { css } from 'styled-components';

const StyledFormInput = styled.div<{ active?: boolean; error?: boolean }>`
  position: relative;
  margin-bottom: 20px;
  label, input {
    font-size: 1.5rem;
    font-weight: 300;
  }
  label {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s;
  }
  input {
    width: 100%;
    background: none;
    border: 0;
    border-bottom: 1px solid var(--lightgray);
    height: 46px;
    &:focus {
      border-color: @black;
      outline: none;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      & + label {
        transform: none;
        top: 0;
        left: 5px;
        font-size: 1rem;
      }
    }
  }
  small {
    color: var(--red);
    font-size: 1.2rem;
    font-weight: 300;
    position: absolute;
    right: 0;
    display: none;
    ${({ error }) => error ? css`
    display: block
    ` : ''}
  }
  ${({ active }) => active ? css`
    label {
      transform: none;
      top: 0;
      left: 5px;
      font-size: 1rem;
    }
  ` : ''}
`;

export default StyledFormInput;