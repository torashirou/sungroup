import StyledSelectTrigger from "../styled/StyledSelectTrigger";

function SelectTrigger(props) {
  const handleClick = () => {
    props.setActive(!props.active)
  }
  return (
    <StyledSelectTrigger active={props.active} onClick={handleClick}>
      <img src={props.img} alt={props.name} />
      <span>{props.name}</span>
    </StyledSelectTrigger>
  );
}

export default SelectTrigger;
