import StyledSelectOption from "../styled/StyledSelectOption";

function SelectOption(props) {
  const handleClick = () => {
    props.setIndex(props.index);
    props.setData(props.name);
    props.setActive(false)
  }
  return (
    <StyledSelectOption onClick={handleClick}>
      <img src={props.img} alt={props.name} />
      <span>{props.name}</span>
    </StyledSelectOption>
  );
}

export default SelectOption;
