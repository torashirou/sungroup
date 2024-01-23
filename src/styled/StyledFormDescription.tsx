import styled from 'styled-components';

const StyledFormDescription = styled.div`
  text-align: left;
  font-size: 1.3rem;
  font-weight: 300;

  span {
    display: block;
    margin-bottom: 24px;
    span {
      display: inline;
    }
  }
  
  a {
    color: var(--text);
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
`;

export default StyledFormDescription;