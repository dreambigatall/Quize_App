import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

export default function StarterScreen({numQuetions, dispatch}) {
  return (
    <div className='start'>
        <h2>Welcome to The React Quize!</h2>
        <h3>{numQuetions} question to test your React mastery</h3>
        <button onClick={()=>dispatch({type:'start'})} className='btn btn-ui'>Let Start</button>
    </div>
  )
}
