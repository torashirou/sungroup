import StyledSelectTrigger from "../styled/StyledSelectTrigger";

interface SelectTriggerProps {
  setActive: Function;
  active: boolean;
  img: string;
  name: string;
}

function SelectTrigger({ setActive, active, img, name}: SelectTriggerProps) {
  const handleClick = () => {
    setActive(!active)
  }
  return (
    <StyledSelectTrigger active={active} onClick={handleClick}>
      <img src={img} alt={name} />
      <span>{name}</span>
    </StyledSelectTrigger>
  );
}

export default SelectTrigger;
