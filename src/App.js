import pizza from './assets/pizza.png';
import './App.css';
import CotacaoAtual from './components/CotacaoAtual';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <CotacaoAtual />
        <img src={pizza} className="App-logo" alt="logo" />
        <p>
         BTC IN PIZZA
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
