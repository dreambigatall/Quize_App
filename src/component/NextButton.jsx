import React from 'react'

export default function NextButton({dispatch, answer, index, numQuetion}) {
  
  if(answer===null) return null;
  if(index < numQuetion - 1)  return (
    <button className='btn btn-ui' onClick={()=>dispatch({type:"nextQuetion"})}
    >Next</button>
  );

   if(index === numQuetion - 1)  return (
    <button className='btn btn-ui' onClick={()=>dispatch({type:"Finished"})}
    >Finished</button>
  )
}
