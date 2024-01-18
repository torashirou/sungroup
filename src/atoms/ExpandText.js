import { useState } from 'react';
import literals from '../assets/Literals';
import StyledExpandText from '../styled/StyledExpandText';
import Expand from './Expand';

function ExpandText(props) {
  const [hide, setHide] = useState(false);
  const handleHideClick = () => {
    setHide(false);
  }
  return (
    <>
      <Expand hide={hide} setData={setHide} />
      <StyledExpandText hide={hide ? 'true' : undefined}>
        {props.children}
        <a onClick={handleHideClick} href={literals.links.hide}>{literals.links.less}</a>
      </StyledExpandText>
    </>
  );
}

export default ExpandText;
