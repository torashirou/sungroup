import { useState, useEffect } from 'react';
import { mockedFilteredData } from "../assets/MockedData";
import StyledSelect from '../styled/StyledSelect';
import SelectTrigger from '../molecules/SelectTrigger';
import SelectList from '../molecules/SelectList';

interface SelectProps {
  initIndex?: number;
  setData: Function;
}

function Select({ initIndex = 0, setData}: SelectProps) {
  const [index, setIndex] = useState(initIndex);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setData(mockedFilteredData[index].name);
  })

    return (
      <StyledSelect>
        <SelectTrigger name={mockedFilteredData[index].name} img={mockedFilteredData[index].img} active={active} setActive={setActive} />
        <SelectList data={mockedFilteredData} active={active} setIndex={setIndex} setActive={setActive} setData={setData} />
      </StyledSelect>
    );
}

export default Select;
