import './App.css';
const tg = window.Telegram.WebApp;


function App() {

  const onClose = ()  => {
    tg.ready();
    tg.close();
  }

  return (
    <div className="App">
      пока мир(

      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
