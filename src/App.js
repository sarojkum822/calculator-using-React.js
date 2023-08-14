import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [input,setInput] = useState('1232');
  
    const calculateResult = (input)=>{
      try{
        const operators =['+','-','*','/'];
        let operator = null;

        for(let i=0;i<input.length;i++){
          if(operators.includes(input[i])){
            operator = input[i];
            break;
          }
        }
        if(!operator){
          setInput(parseFloat(input).toString());
          return;
        }
        const [operand1,operand2] = input.split(operator).map(parseFloat);
        let result;

        switch(operator){
          case '+':
            result=operand1 + operand2;
            break;
          case '-':
            result=operand1 - operand2;
            break;
          case '*':
            result=operand1 * operand2;
            break;
          case '/':
            result=operand1 / operand2;
            break;
            default:
              throw new Error('Invalid operator')
        }
        setInput(result.toString());
      }
      catch(error){
          setInput('Error')
      }
    }




    const handlebuttonclicked=(value)=>{
      if(value === 'c'){
        setInput('');
      }else if(value==='<'){
        setInput(input.slice(0,-1));
      }else if(value==='='){
        calculateResult(input);
      }
      else{
        setInput((preValue) => preValue + value);
      }
    }


  return (
    <div className='container'>
      <div className='calc'>
           <h1 id='head'>By saroj kumar</h1>
          <h1 id='input'>{input}</h1>
          <div>
            <button onClick={()=>handlebuttonclicked('c')}>c</button>
            <button onClick={()=>handlebuttonclicked('<')}>&lt;</button>
            <button onClick={()=>handlebuttonclicked('%')}>%</button>
            <button onClick={()=>handlebuttonclicked('/')}>/</button>
          </div>
          <div>
            <button onClick={()=>handlebuttonclicked('7')}>7</button>
            <button onClick={()=>handlebuttonclicked('8')}>8</button>
            <button onClick={()=>handlebuttonclicked('9')}>9</button>
            <button onClick={()=>handlebuttonclicked('*')}>*</button>
          </div>
          <div>
            <button onClick={()=>handlebuttonclicked('4')}>4</button>
            <button onClick={()=>handlebuttonclicked('5')}>5</button>
            <button onClick={()=>handlebuttonclicked('6')}>6</button>
            <button onClick={()=>handlebuttonclicked('-')}>-</button>
          </div>
          <div>
            <button onClick={()=>handlebuttonclicked('1')}>1</button>
            <button onClick={()=>handlebuttonclicked('2')}>2</button>
            <button onClick={()=>handlebuttonclicked('3')}>3</button>
            <button onClick={()=>handlebuttonclicked('+')}>+</button>
          </div>
          <div>
            <button onClick={()=>handlebuttonclicked('0')}>0</button>
            <button onClick={()=>handlebuttonclicked('00')}>00</button>
            <button onClick={()=>handlebuttonclicked('.')}>.</button>
            <button onClick={()=>handlebuttonclicked('=')}>=</button>
          </div>
      </div>
    </div>
  )
}

export default App