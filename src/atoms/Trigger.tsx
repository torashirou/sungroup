import menu from '../assets/img/menu.png'
import literals from '../assets/Literals';
import StyledTrigger from '../styled/StyledTrigger';

interface TriggerProps {
  open: boolean;
  handleOpen: Function;
}
function Trigger({ open, handleOpen }: TriggerProps) {
  const handleClick = () => {
      handleOpen(!open);
  }
  return (
    <StyledTrigger href="#open" onClick={handleClick} className={`mobile_trigger d-lg-none`} open={open}><img src={menu} alt={literals.header.triggerAlt} /></StyledTrigger>
  );
}

export default Trigger;
