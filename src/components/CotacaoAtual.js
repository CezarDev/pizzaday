import { useEffect, useState } from "react";

//const URL = process.env.API
const URL = 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT'


function CotacaoAtual(){
    
    const  [cotacao, setCotacao] = useState({})

    useEffect(() => {
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
    }, [])
        
    return (
        <h1>BTC/USDT:  $ {cotacao.price}</h1>
    )    
}

export default CotacaoAtual;