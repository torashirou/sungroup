import styled from 'styled-components';

const MenuBtn = styled.a`
  border: 1px solid var(--black);
  color: var(--black);
  margin-left: -1px;
  margin-right: -1px;
  -webkit-box-shadow: inset 0px 0px 0px 1px transparent;
  -moz-box-shadow: inset 0px 0px 0px 1px transparent;
  box-shadow: inset 0px 0px 0px 1px transparent;
  &:hover {
    background: var(--white) !important;
    -webkit-box-shadow: inset 0px 0px 0px 1px var(--black);
    -moz-box-shadow: inset 0px 0px 0px 1px var(--black);
    box-shadow: inset 0px 0px 0px 1px var(--black);
  }
`

export default MenuBtn;
export const AlternativeMenuBtn = styled(MenuBtn)`
  background: var(--btnaltbg) !important;
  color: var(--white) !important;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  &:hover {
    background: var(--darkgray) !important;
    border-color: var(--darkgray);
  }
`