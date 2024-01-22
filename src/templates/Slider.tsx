import { useState, useEffect } from 'react';
import mockedData from '../assets/MockedData';
import StyledSlider from '../styled/StyledSlider';
import Slide from '../organisms/Slide';
import SliderArrow from '../atoms/SliderArrow';

interface SliderProps {
  initIndex?: number;
}

function Slider({ initIndex = 0 }: SliderProps) {
  const [index, setIndex] = useState(initIndex);
  const [length] = useState(mockedData.length);
  const [prevInactive, setPrevInactive] = useState(index === 0);
  const [nextInactive, setNextInactive] = useState(index >= length - 1);
  
  const transform = {
    transform: `translateX(${20 - index * 60}vw)`,
  }

  useEffect(() => {
    setPrevInactive(false)
    setNextInactive(false)
    if (index === 0) setPrevInactive(true)
    if (index >= length - 1) setNextInactive(true)
  }, [index, length])

  return (
    <StyledSlider>
      <SliderArrow prev={true} index={index} setIndex={setIndex} length={length} inactive={prevInactive} />
      <div className="slider" style={transform}>
        {mockedData.map((car, i) => <Slide active={i === index} car={car} key={i} />)}
      </div>
      <SliderArrow index={index} setIndex={setIndex} length={length} inactive={nextInactive} />
    </StyledSlider>
  );
}

export default Slider;
