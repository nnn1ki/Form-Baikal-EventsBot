import React, { useState } from 'react';
import './Form.css';
import Button from '../Buttons/Button';

const Form = () => {
    const [adultsCount, setAdultsCount] = useState(1);
    const [childrenCount, setChildrenCount] = useState(0);
    const [childrenAges, setChildrenAges] = useState([]);
    const [needsTransfer, setNeedsTransfer] = useState(false);
    const [certificateNeeded, setCertificateNeeded] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleChildrenCountChange = (e) => {
        const count = parseInt(e.target.value);
        setChildrenCount(count);
        setChildrenAges(new Array(count).fill('').map(() => ''));
    };

    const handleChildAgeChange = (index, e) => {
        const newAges = [...childrenAges];
        newAges[index] = e.target.value;
        setChildrenAges(newAges);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Здесь можно отправить данные на сервер
        console.log('Отправленные данные:', {
            adultsCount,
            childrenCount,
            childrenAges,
            needsTransfer,
            certificateNeeded,
            phoneNumber,
        });
    };

    return (
        <div className="form">
            <h3>Заполните данные формы для отправки информации организаторам</h3>
            <label>
                Количество взрослых:
                <input type="number" value={adultsCount} onChange={(e) => setAdultsCount(parseInt(e.target.value))} />
            </label>
            <label>
                Количество детей:
                <input type="number" value={childrenCount} onChange={handleChildrenCountChange} />
            </label>
            {childrenAges.map((age, index) => (
                <label key={index}>
                    Возраст ребенка {index + 1}:
                    <input type="text" value={age} onChange={(e) => handleChildAgeChange(index, e)} />
                </label>
            ))}
            <label>
                <input type="checkbox" checked={needsTransfer} onChange={(e) => setNeedsTransfer(e.target.checked)} />
                Нужна помощь с трансфером
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={certificateNeeded}
                    onChange={(e) => setCertificateNeeded(e.target.checked)}
                />
                Получить свидетельство об прохождении курсов
            </label>
            <label>
                Телефон:
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    maxLength="18"
                />
            </label>
            <Button onClick={handleFormSubmit}>Отправить</Button>
        </div>
    );
};

export default Form;
