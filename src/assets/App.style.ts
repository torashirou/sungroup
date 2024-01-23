import { createGlobalStyle } from "styled-components";

const sizes = {
    tablet: '768px',
    desktop: '992px',
    wide: '1200px',
    large: '1600px'
};

const mediaQueries = {
  mobile: `(max-width: ${sizes.tablet})`,
  tablet: `(min-width: ${sizes.tablet})`,
  desktop: `(min-width: ${sizes.desktop})`,
  wide: `(min-width: ${sizes.wide})`,
  large: `(min-width: ${sizes.large})`,
}

const GlobalStyles = createGlobalStyle`
:root {
    --radius: 0px;

    --white: #ffffff;
    --black: #000000;
    --lightgray: #D5D5D5;
    --gray: #999999;
    --darkgray: #494949;
    --red: #FF0000;
    --blue: #007BFF;
    --darkblue: #0056B3;

    --text: #242221;
    --checkbox: #8C8B8B;

    --lightbg: #f5f5f5;
    --btnaltbg: #190F14;
    --darkbg: #1B1B1B;
    --brngraybg: #DBD3CB;
}

html {
    font-size: 10px;
    background: var(--white);
}
  
body {
    background: var(--white);
    color: var(--text);
    font-family: 'Poppins';
}
  
* {
    box-sizing: border-box;
}

.container {
    @media ${mediaQueries.large} {
        max-width: 1400px;
    }
}

a {
    color: var(--blue);
    transition: all 0.3s;
    * {
        transition: all 0.3s;
    }
    &:hover {
        color: var(--darkblue);
        img {
            opacity: 0.7;
        }
    }
}
`;

export default GlobalStyles

export const theme = {
    sizes,
    mediaQueries
}