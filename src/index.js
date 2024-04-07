import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
// const router = createBrowserRouter(router, {basename: "/react"});
root.render(
    <React.StrictMode>
        <BrowserRouter basename="/react">
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);



//todo -
// сделать подсчет суммы прямо в форме
// уточнить критерии для формы

