import styled from 'styled-components';
import { theme } from '../assets/App.style';

const Btn = styled.a`
    padding: 12px 27px;
    border: 1px solid var(--black);
    color: var(--black);
    font-size: 1.2rem;
    font-weight: 400;
    border-radius: 0;
    transition: all 0.3s;
    display: inline-block;
    -webkit-box-shadow: inset 0px 0px 0px 1px transparent;
    -moz-box-shadow: inset 0px 0px 0px 1px transparent;
    box-shadow: inset 0px 0px 0px 1px transparent;
    @media ${theme.mediaQueries.large} {
        font-size: 1.4rem;
    }
    &:hover {
        text-decoration: none;
        color: var(--black);
        -webkit-box-shadow: inset 0px 0px 0px 1px var(--black);
        -moz-box-shadow: inset 0px 0px 0px 1px var(--black);
        box-shadow: inset 0px 0px 0px 1px var(--black);
    }
`

export default Btn;
export const AlternativeBtn = styled(Btn)`
    background: var(--btnaltbg);
    border-color: var(--btnaltbg);
    color: var(--white);
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    &:hover {
        background: var(--darkgray);
        border-color: var(--darkgray);
        color: var(--white);
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    }
`
export const GrayBtn = styled(Btn)`
    background: var(--brngraybg);
    border: 0;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    @media ${theme.mediaQueries.large} {
        font-size: 1.5rem;
    }
    &:hover {
        background: var(--white);
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    }
`
export const WhiteBtn = styled(Btn)`
    background: var(--white);
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    @media ${theme.mediaQueries.large} {
        font-size: 1.5rem;
    }
    &:hover {
        background: var(--brngraybg);
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    }
`
