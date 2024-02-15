import React from 'react';
import Button from "../Buttons/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';


//todo - написать правила использования формы обратной связи

const Header = (props) => {

    return (
        <div className={'header'}>
            <div>
                <h2 className={'info'}>
                    Форма обратной связи
                </h2>
            </div>


            {/*<span className={'username'}>*/}
            {/*    {user?.username}*/}
            {/*</span>*/}
            {/*<div className={'info'}>*/}
            {/*    Укажите Ваше ФИО, специалиста к которому хотите обратиться, опишите сам вопрос и Email для обратной связи*/}
            {/*</div>*/}
        </div>
    );
};

export default Header;