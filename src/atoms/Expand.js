import literals from '../assets/Literals';
import StyledExpand from '../styled/StyledExpand';

function Expand(props) {
  const handleClick = () => {
    props.setData(true);
  }
  return (
      <StyledExpand hide={props.hide ? 'true' : undefined} onClick={handleClick} href={literals.links.expand}>{literals.links.more}</StyledExpand>
  );
}

export default Expand;
