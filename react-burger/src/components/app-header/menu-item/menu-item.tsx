import React from 'react';
import menuItemStyles from './menu-item.module.css'

interface Props {
  children: React.ReactNode,
  text: string,
  isActive: boolean
}

function MenuItem({ children, text, isActive }: Props) {
  return (
    <>
      <li className={`text text_type_main-default pl-5 pr-5 pb-5 pt-5 ${menuItemStyles.menu_item} ${isActive ? '' : 'text_color_inactive'} `}>
        {children}
        <span className='ml-2'>
          {text}
        </span>
      </li>
    </>
  );
}

export default MenuItem;
