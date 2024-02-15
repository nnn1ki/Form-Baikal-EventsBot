import React from 'react';
import Button from "../Buttons/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';


//todo - написать правила использования формы обратной связи

const Header = (props) => {

    const {user, onClose, } = useTelegram();


    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;