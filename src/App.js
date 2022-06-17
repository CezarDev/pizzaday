import './App.css';
import CotacaoAtual from './components/CotacaoAtual';
import PizzasIMG from './components/PizzasIMG';

function App() {
  
  return (
    
    <div className="App">       
      <header className="App-header">
      <div className= "cotacao">
        <CotacaoAtual />
        <PizzasIMG />
        </div>        
        <p>
         10.000 BTC IN 2 PIZZAS
        </p>
      </header>
     
    </div>
  );
}

export default App;
