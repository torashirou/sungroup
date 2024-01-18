import styled from 'styled-components';
import banner from '../assets/img/banner.png'
import { theme } from '../assets/App.style'

const StyledBanner = styled.div`
    background: url('${banner}') center center;
    max-height: 80vh;
    height: 800px;
    color: var(--white);

    .container {
      height: 100%;
    }

    h1 {
      font-size: 1.9rem;
      font-weight: 300;
      opacity: 0.5;
      margin-bottom: 16px;
    }

    a {
      margin-top: 20px;
      margin-bottom: 50px;
      @media ${theme.mediaQueries.large} {
        margin-top: 48px;
        margin-bottom: 128px;
      }
    }
`

export default StyledBanner;