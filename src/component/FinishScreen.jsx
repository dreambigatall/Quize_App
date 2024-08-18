import { type } from '@testing-library/user-event/dist/type';
import React from 'react'

export default function FinishScreen({dispatch,point, maxPossiblePoint, highScore}) {
  
    let emoji ;
    const percentage=(point/maxPossiblePoint) * 100;

    if(percentage ===100) emoji="cool";
    if(percentage >=80 && percentage < 100) emoji="good";
    if(percentage >=50 && percentage < 80) emoji="improve";
    if(percentage <50 ) emoji="bad";


   console.log(percentage);
  
    return (
  <>
    <p className='result'>
      {emoji}  You scored <strong>{point}</strong>
        out of {maxPossiblePoint}
        ({Math.ceil(percentage)})
    </p>
    <p className='highscore'>Your Higer Score is {highScore} pointes</p>
    <button className='btn btn-ui'
    onClick={()=>dispatch({type:"restart"})}>
            Restart
    </button>
  </>
  )
}
