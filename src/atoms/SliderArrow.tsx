import literals from '../assets/Literals';
import StyledArrow from '../styled/StyledArrow';

interface SliderArrowProps {
  prev?: boolean;
  index: number;
  length: number;
  setIndex: Function;
  inactive: boolean;
}

function SliderArrow({ prev, index, length, setIndex, inactive }: SliderArrowProps) {

  const handleClick = () => {
    if (prev && index === 0) return false;
    if (!prev && index >= length - 1) return false;
    if (prev) {
      setIndex(index - 1);
    } else {
      setIndex(index + 1);
    }
    return true
  }


  return (
    <StyledArrow previous={prev} inactive={inactive} onClick={handleClick} href={literals.slider.prev}></StyledArrow>
  );
}

export default SliderArrow;
