import React from "react";
import loginButtonStyles from "./login-button.module.css";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function LoginButton() {
  return (
    <div className={loginButtonStyles.login_button_wrapper}>
      <div
        className={`${loginButtonStyles.login_button} text text_type_main-default pl-5 pr-5 pb-5 pt-5 text_color_inactive`}
      >
        <ProfileIcon type="secondary" />
        <span className="ml-2">Личный кабинет</span>
      </div>
    </div>
  );
}

export default LoginButton;
