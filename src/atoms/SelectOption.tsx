import StyledSelectOption from "../styled/StyledSelectOption";

interface SelectOptionProps {
  index: number;
  name: string;
  img: string;
  setIndex: Function;
  setData: Function;
  setActive: Function;
}

function SelectOption( { index, name, img, setIndex, setData, setActive }: SelectOptionProps) {
  const handleClick = () => {
    setIndex(index);
    setData(name);
    setActive(false)
  }
  return (
    <StyledSelectOption onClick={handleClick}>
      <img src={img} alt={name} />
      <span>{name}</span>
    </StyledSelectOption>
  );
}

export default SelectOption;
