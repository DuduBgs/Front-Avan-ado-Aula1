import React from 'react'
import Adicao from './components/Adicao'
import Subitracao from './components/Subitracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'

const App = () => {
  return (
    <div>
      <Adicao num1={6} num2={3}/>
      <Subitracao num1={6} num2={3}/>
      <Multiplicacao num1={6} num2={3}/>
      <Divisao num1={6} num2={3}/>
    </div>
  )
}

export default App