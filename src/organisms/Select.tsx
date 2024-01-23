import { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { mockedFilteredData } from "../assets/MockedData";
import StyledSelect from '../styled/StyledSelect';
import SelectTrigger from '../molecules/SelectTrigger';
import SelectList from '../molecules/SelectList';

interface SelectProps {
  initIndex?: number;
}

function Select({ initIndex = 0 }: SelectProps) {
  const { register, setValue } = useFormContext()
  const [index, setIndex] = useState(initIndex);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setValue('car', mockedFilteredData[index].name);
  }, [index]);

    return (
      <StyledSelect>
        <input type="hidden" defaultValue={mockedFilteredData[index].name} {...register('car')} />
        <SelectTrigger name={mockedFilteredData[index].name} img={mockedFilteredData[index].img} active={active} setActive={setActive} />
        <SelectList data={mockedFilteredData} active={active} setIndex={setIndex} setActive={setActive} />
      </StyledSelect>
    );
}

export default Select;
