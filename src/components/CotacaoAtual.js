import { useEffect, useState } from "react";

//const URL = process.env.API
const URL = 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT'
const URL_BRL = 'https://api.binance.com/api/v3/ticker/price?symbol=BTCBRL'
const URL_BNB = 'https://api.binance.com/api/v3/ticker/price?symbol=BNBBRL'


function CotacaoAtual(){
    
    const  [cotacao, setCotacao] = useState(0)
    const  [cotacaoBrl, setCotacaoBrl] = useState(0)
    const  [CotacaoBnb, setCotacaoBnb] = useState(0)

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

    useEffect(() => {
        setTimeout(() => {
            fetch(URL_BRL, {
                }).then(function(response){
                    response.json()
                .then(function (data){
                    setCotacaoBrl(data)
                })
            })
            .catch(function (error){
                console.log(error)
            })
        }, 2000)  
    }, [cotacao])

    useEffect(() => {
        setTimeout(() => {
            fetch(URL_BNB, {
                }).then(function(response){
                    response.json()
                .then(function (data){
                    setCotacaoBnb(data)
                })
            })
            .catch(function (error){
                console.log(error)
            })
        }, 2000)  
    }, [cotacao])

    
    return (
        <div className= "cotacao">
        <h1>BTC/USD: {Math.round(cotacao.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h1>
        <h1>BTC/BRL: {Math.round(cotacaoBrl.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h1>
        <h1>BNB/BRL: {Math.round(CotacaoBnb.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h1>
       
        <h3>No dia 22 de maio de 2010, um programador trocou 10.000 BTC por duas pizzas
              </h3>
       
        <nav><h4>Hoje valem {Math.round(cotacaoBrl.price * 10000).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h4></nav>
        </div>
    )    
}

export default CotacaoAtual;