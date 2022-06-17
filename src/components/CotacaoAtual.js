import { useEffect, useState } from "react";

//const URL = process.env.API
const URL = 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT'


function CotacaoAtual(){
    
    const  [cotacao, setCotacao] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            fetch(URL, {
                }).then(function(response){
                    response.json()
                .then(function (data){
                    setCotacao(data)
                })
            })
            .catch(function (error){
                console.log(error)
            })
        }, 2000)  
    }, [cotacao])
    
    return (
        <div className="retornoCotacao">
        <h1>BTC/USD: {Math.round(cotacao.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h1>
        <nav><h4>Today these 2 pizzas are worth {Math.round(cotacao.price * 10000).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h4></nav>
        </div>
    )    
}

export default CotacaoAtual;