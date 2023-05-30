import React from 'react';
import appHeaderStyles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import Menu from './menu/menu';
import MenuItem from './menu-item/menu-item';
import LoginButton from './login-button/login-button';

function AppHeader() {
  return (
    <header className={`${appHeaderStyles.app_header} pt-4 pb-4 `}>
      <div className={appHeaderStyles.app_header_wrapper}>
        <Menu>
          <MenuItem text={'Конструктор'} isActive={true}>
            <BurgerIcon type={true ? 'primary' : 'secondary'} />
          </MenuItem>
          <MenuItem text={'Лента заказов'} isActive={false}>
            <ListIcon type={false ? 'primary' : 'secondary'} />
          </MenuItem>
        </Menu>
        <Logo />
        <LoginButton />
      </div>
    </header>
  );
}

export default AppHeader;
