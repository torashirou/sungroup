import menu from '../assets/img/menu.png'
import literals from '../assets/Literals';
import StyledTrigger from '../styled/StyledTrigger';

function Trigger(props) {
  const handleOpen = () => {
      props.handleOpen(!props.open);
  }
  return (
    <StyledTrigger href="#open" onClick={handleOpen} className={`mobile_trigger d-lg-none ${props.open ? '--open' : ''}`}><img src={menu} alt={literals.header.triggerAlt} /></StyledTrigger>
  );
}

export default Trigger;
