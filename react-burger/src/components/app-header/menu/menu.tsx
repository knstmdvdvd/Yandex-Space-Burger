import React from 'react';
import  menuStyles from './menu.module.css'

interface Props {
    children: React.ReactNode
}

function Menu({children}: Props) {
  return (
    <ul className={menuStyles.menu}>
        {children}
    </ul>
  );
}

export default Menu;
