import React from 'react'

export default function Option({quetiond,dispatch, answer}) {
    const hasAnswer = answer != null;
  return (
    <div className='options'>
        {quetiond.options.map((option,index) =>(
            <button className={`btn btn-option 
                ${index === answer ? "answer" : ""}
                 ${hasAnswer?index===quetiond.correctOption?
                     "correct":"wrong":""}`} 
            key={option}
             onClick={()=>dispatch({type:"newAnswer",
                 payload:index})}
             disabled={answer!=null}>{option}</button>))}
 </div>
  )
}
