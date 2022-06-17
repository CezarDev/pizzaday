import pizza from '../assets/pizza.jpg'
        
        
    function PizzasIMG(){
        return(
            <div className="imagens">
                <img src={pizza} className="App-logo" alt="logo" />
                <img src={pizza} className="App-logo2" alt="logo" />
            </div>
        )    

    }

    export default PizzasIMG;