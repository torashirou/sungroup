import { useState } from 'react';
import Trigger from '../atoms/Trigger';
import Menu from '../molecules/Menu';

function Header() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Trigger handleOpen={setOpen} open={open}></Trigger>
        <Menu open={open}></Menu>
      </>
    );
}

export default Header;
