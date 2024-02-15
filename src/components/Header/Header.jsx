import React from 'react';
import Button from "../Buttons/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';


//todo - написать правила использования формы обратной связи

const Header = (props) => {

    return (
        <div className={'header'}>
            <span className={'info'}>
                Форма обратной связи
            </span>
            <span className={'username'}>
                Добро пожаловать, {user?.username}
            </span>
            <span className={'info'}>
                Укажите Ваше ФИО, специалиста к которому хотите обратиться, опишите сам вопрос и Email для обратной связи
            </span>
        </div>
    );
};

export default Header;