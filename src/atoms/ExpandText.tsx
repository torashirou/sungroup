import { useState } from 'react';
import literals from '../assets/Literals';
import StyledExpandText from '../styled/StyledExpandText';
import Expand from './Expand';

interface ExpandTextProps {
  children?: string;
}

function ExpandText( { children }: ExpandTextProps) {
  const [hide, setHide] = useState(false);
  const handleHideClick = () => {
    setHide(false);
  }
  return (
    <>
      <Expand hide={hide} setData={setHide} />
      <StyledExpandText hide={hide}>
        {children}
        <a onClick={handleHideClick} href={literals.links.hide}>{literals.links.less}</a>
      </StyledExpandText>
    </>
  );
}

export default ExpandText;
