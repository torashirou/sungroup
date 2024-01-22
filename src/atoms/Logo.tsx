import logo from '../assets/img/logo.png'
import literals from '../assets/Literals';

function Logo() {
  return (
    <img src={logo} alt={literals.header.logoAlt} />
  );
}

export default Logo;
