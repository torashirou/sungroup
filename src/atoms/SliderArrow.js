import literals from '../assets/Literals';
import StyledArrow from '../styled/StyledArrow';

function SliderArrow(props) {

  const handleClick = () => {
    if (props.prev && props.index === 0) return false;
    if (!props.prev && props.index >= props.length - 1) return false;
    if (props.prev) {
      props.setIndex(props.index - 1);
    } else {
      props.setIndex(props.index + 1);
    }
    return true
  }


  return (
    <StyledArrow previous={props.prev} inactive={props.inactive ? 'true' : undefined} onClick={handleClick} href={literals.slider.prev}></StyledArrow>
  );
}

export default SliderArrow;
