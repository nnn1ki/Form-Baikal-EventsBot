import React from 'react';
import Button from "../components/Buttons/Button";

const Header = (props) => {
    const tg = window.Telegram.WebApp;
    const onClose = ()  => {
        tg.ready();
        tg.close();
    }

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;