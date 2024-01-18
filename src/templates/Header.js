import StyledHeader from '../styled/StyledHeader';
import Nav from '../organisms/Nav'
import Options from '../molecules/Options';
import Logo from '../atoms/Logo'

function Header() {
  return (
    <StyledHeader>
      <div className='container d-flex justify-content-between align-items-center'>
        <Logo />
        <Nav />
        <Options />
      </div>
    </StyledHeader>
  );
}

export default Header;
