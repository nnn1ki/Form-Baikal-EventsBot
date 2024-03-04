import './App.css';
import Button from "./components/Buttons/Button";
import Header from "./components/Header/Header";
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {Route, Routes} from "react-router-dom";

import Form from "./components/Form/Form";




function App() {

    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready()
    }, [])


    return (
    <div className="App">
        <Routes>
            <Route index element={<Form />} />
            {/* <Route path="/react" component={<Form />} /> */}
        </Routes>

    </div>
    );
}

export default App;
