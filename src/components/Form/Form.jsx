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
            <h2>Заполните данные формы для отправки информации организаторам</h2>
            <div className="form-group">
                <label htmlFor="adultsCount">Взрослые:</label>
                <input
                    id="adultsCount"
                    type="number"
                    value={adultsCount}
                    onChange={(e) => setAdultsCount(parseInt(e.target.value))}
                    className="small-input"
                />
            </div>
            <div className="form-group">
                <label htmlFor="childrenCount">Дети:</label>
                <input
                    id="childrenCount"
                    type="number"
                    value={childrenCount}
                    onChange={handleChildrenCountChange}
                    className="small-input"
                />
            </div>
            {childrenAges.map((age, index) => (
                <div className="form-group" key={index}>
                    <label htmlFor={`childAge${index + 1}`}>Возраст ребенка {index + 1}:</label>
                    <input
                        id={`childAge${index + 1}`}
                        type="text"
                        value={age}
                        onChange={(e) => handleChildAgeChange(index, e)}
                    />
                </div>
            ))}

            <br/>

            <div className="form-group">
                <input
                    id="needsTransfer"
                    type="checkbox"
                    checked={needsTransfer}
                    onChange={(e) => setNeedsTransfer(e.target.checked)}
                />
                <label htmlFor="needsTransfer">Нужна помощь с трансфером</label>
            </div>
            <div className="form-group">
                <input
                    id="certificateNeeded"
                    type="checkbox"
                    checked={certificateNeeded}
                    onChange={(e) => setCertificateNeeded(e.target.checked)}
                />
                <label htmlFor="certificateNeeded">Получить свидетельство об прохождении курсов</label>
            </div>

            <br/>

            <div className="form-group">
                <label htmlFor="phoneNumber">Телефон:</label>
                <input
                    id="phoneNumber"
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    maxLength="18"
                />
            </div>
            <Button onClick={handleFormSubmit}>Отправить</Button>
        </div>

    );
};

export default Form;
