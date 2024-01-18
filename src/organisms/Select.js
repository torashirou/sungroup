import { useState, useEffect } from 'react';
import { mockedFilteredData } from "../assets/MockedData";
import StyledSelect from '../styled/StyledSelect';
import SelectTrigger from '../molecules/SelectTrigger';
import SelectList from '../molecules/SelectList';

function Select(props) {
  const [index, setIndex] = useState(props.index ? props.index : 0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    props.setData(mockedFilteredData[index].name);
  })

    return (
      <StyledSelect>
        <SelectTrigger name={mockedFilteredData[index].name} img={mockedFilteredData[index].img} active={active ? 'true' : undefined} setActive = {setActive} />
        <SelectList data={mockedFilteredData} active={active} setIndex={setIndex} setActive={setActive} setData={props.setData} />
      </StyledSelect>
    );
}

export default Select;
