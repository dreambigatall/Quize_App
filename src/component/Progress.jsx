import React from 'react'

export default function Progress({numQuetion, index,points, maxpoint, answer}) {
  return (
    <header className='progress'>
        <progress max={numQuetion} value={index + Number(answer !== null )}/>
        <p>Quetion <strong>
           {index+1} /{numQuetion}</strong></p>
           <p><strong>{points}/{maxpoint}</strong></p>
    </header>
  )
}
