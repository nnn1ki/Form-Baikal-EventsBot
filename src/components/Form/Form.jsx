import React, { useCallback, useEffect, useState } from 'react';
import './Form.css';
import { useTelegram } from '../../hooks/useTelegram';
import Button from "../Buttons/Button";

const Form = () => {
    const [fullName, setFullName] = useState('');
    const [selectedSpecialist, setSelectedSpecialist] = useState('lawyer');
    const [questionDescription, setQuestionDescription] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const data = {
        fullName,
        selectedSpecialist,
        questionDescription,
        userEmail
    }

    const { tg } = useTelegram();

    const onSendData = useCallback( async () => {
        const data = {
            fullName,
            selectedSpecialist,
            questionDescription,
            userEmail,
        };
        tg.sendData(JSON.stringify(data));
        console.log("Данные, полученные с формы - ", data); //данные получены корректно
        await response(); //попытка отправить данные в базу данных
        
        // await tg.close();
        // onClose();
    }, [fullName, selectedSpecialist, questionDescription, userEmail,]);


    // Отправка данных на сервер
    const response = async () => {
        fetch('https://bf-bot.conferoom.ru/api/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log('Данные успешно отправлены на сервер:', result);
                // Дополнительная обработка при необходимости
                tg.close();
            })
            .catch((error) => {
                console.error('Ошибка при отправке данных на сервер:', error);
                // Обработка ошибки при необходимости
            });
    }


    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData);
        return () => {
            tg.offEvent('mainButtonClicked', onSendData);
        };
    }, [onSendData]);

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить',
        });
    }, []);

    // Простейшая валидация для заполнения всех данных
    useEffect(() => {
        if (!fullName || !selectedSpecialist || !questionDescription || !userEmail) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [fullName, selectedSpecialist, questionDescription, userEmail]);

    const onChangeFullName = (e) => {
        setFullName(e.target.value);
    };

    const onChangeSpecialist = (e) => {
        setSelectedSpecialist(e.target.value);
    };

    const onChangeQuestionDescription = (e) => {
        setQuestionDescription(e.target.value);
    };

    const onChangeUserEmail = (e) => {
        setUserEmail(e.target.value);
    };

    return (
        <div className={'form'}>
            <h3>Введите данные</h3>
            <input
                className={'input'}
                type={'text'}
                placeholder={'ФИО'}
                value={fullName}
                onChange={onChangeFullName}
            />

            <select value={selectedSpecialist} onChange={onChangeSpecialist} className={'select'}>
                <option value={'director'}>Общие вопросы</option>
                <option value={'lawyer'}>Юрист</option>
                <option value={'specialist'}>Специалист по подбору и настройке ТСР</option>
            </select>

            <textarea
                className={'input'}
                placeholder={'Описание вопроса'}
                value={questionDescription}
                onChange={onChangeQuestionDescription}
            />

            <input
                className={'input'}
                type={'email'}
                placeholder={'Email'}
                value={userEmail}
                onChange={onChangeUserEmail}
            />

            <span className={"under-form"}>
                Спасибо большое за Ваше обращение, мы обязательно Вам ответим в течение 3-х рабочих дней.
            </span>


            {/*<Button onClick={onSendData}>Отправить</Button>*/}

        </div>
    );
};

export default Form;

