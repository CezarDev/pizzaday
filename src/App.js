import pizza from './assets/pizza.jpg';
import './App.css';
import CotacaoAtual from './components/CotacaoAtual';

function App() {
  
  return (
    
    <div className="App">
       
      <header className="App-header">
      <div className= "cotacao">
        <CotacaoAtual />
        </div>
        <div className="imagens">
        <img src={pizza} className="App-logo" alt="logo" />
        <img src={pizza} className="App-logo2" alt="logo" />
        </div>
        <p>
         10.000 BTC IN 2 PIZZAS
        </p>
          <h4>SS </h4>
      </header>
     
    </div>
  );
}

export default App;
