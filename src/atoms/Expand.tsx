import literals from '../assets/Literals';
import StyledExpand from '../styled/StyledExpand';

interface ExpandProps {
  hide: boolean;
  setData: Function;
}

function Expand({ hide, setData }: ExpandProps) {
  const handleClick = () => {
    setData(true);
  }
  return (
      <StyledExpand hide={hide} onClick={handleClick} href={literals.links.expand}>{literals.links.more}</StyledExpand>
  );
}

export default Expand;
