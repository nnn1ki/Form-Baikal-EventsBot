import './App.css';
import Button from "./components/Buttons/Button";
import Header from "./Header/Header";
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";


function App() {

    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
    tg.ready()
    }, [])


    return (
    <div className="App">
        <Header/>
        work
        <button onClick={onToggleButton}>toggle</button>
    </div>
    );
}

export default App;
