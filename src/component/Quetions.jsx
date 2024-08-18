import React from 'react'
import Option from './Option';
export default function Quetions({quetiond, dispatch,answer}) {

  console.log(quetiond);
  return (
    <div>
      <h4>{quetiond.question}</h4>
      <Option quetiond={quetiond}
       dispatch={dispatch} answer={answer}/>

      
    </div>
  )
}
