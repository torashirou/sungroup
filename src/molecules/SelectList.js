import StyledSelectList from '../styled/StyledSelectList';
import SelectOption from '../atoms/SelectOption';

function SelectList(props) {
  return (
    <StyledSelectList active={props.active ? 'true' : undefined}>
        {props.data.map((data, i) => <SelectOption name={data.name} img={data.img} index={i} setIndex={props.setIndex} setActive={props.setActive} setData={props.setData} key={i} />)}
    </StyledSelectList>
  );
}

export default SelectList;
