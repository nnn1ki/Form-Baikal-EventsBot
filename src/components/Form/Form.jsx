import React, {useEffect, useState} from 'react';
import './Form.css'
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {

    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const [tg] = useTelegram();


    useEffect(() => {
        tg.MainButton.setParams({
            text: "ОТправить данные"
        })
    }, [])


    //простейшая валидация Для заполнения всех данных
    useEffect(() => {
        if(!street || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, street]);




    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }



    return (
        <div className={"form"}>
            <h3>Введите данные</h3>
            <input
                className={"input"}
                type={"text"}
                placeholder={"Страна"}
                value={country}
                onChange={onChangeCountry}
            />

            <input
                className={"input"}
                type={"text"}
                placeholder={"Улица"}
                value={street}
                onChange={onChangeStreet}
            />

            <select value={subject} onChange={onChangeSubject} className={"select"} >
                <option value={"physical"}>Физ.Лицо</option>
                <option value={"legal"}>Юр.Лицо</option>
            </select>
        </div>
    );
};

export default Form;


