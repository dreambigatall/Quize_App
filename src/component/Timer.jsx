import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect } from 'react'

export default function Timer({dispatch, secondRemains}) {
     const min= Math.floor(secondRemains/60);
     const sec = secondRemains%60;
    useEffect(function(){
     const id=setInterval(function(){
       // console.log("ticke");
       dispatch({type:'tick'})


     }, 1000);
     return ()=>clearInterval(id);
    },[dispatch])
  return (
    <div className='timer'>
        {min  < 10 && "0"}{min} :
        {sec < 10 && "0"}{sec}

    </div>
  )
}
