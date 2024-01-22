import StyledSelectList from '../styled/StyledSelectList';
import SelectOption from '../atoms/SelectOption';

interface DataProps {
  name: string;
  img: string;
}

interface SelectListProps {
  active: boolean;
  data: Array<DataProps>;
  setIndex: Function;
  setActive: Function;
  setData: Function;
}

function SelectList({ active, data, setIndex, setActive, setData}: SelectListProps) {
  return (
    <StyledSelectList active={active}>
        {data.map((data, i) => <SelectOption name={data.name} img={data.img} index={i} setIndex={setIndex} setActive={setActive} setData={setData} key={i} />)}
    </StyledSelectList>
  );
}

export default SelectList;
