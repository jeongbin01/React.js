import React from 'react'

export const Lad6 = () => {
    const fruitsName = ['사과', '바나나', '오렌지'];


  return (
    <div>
        <h1>Lad 6 - jsx 블락에서 map() 사용</h1>
        <hr />
        <ul>
            {fruitsName.map((a, index) =>
            <li key={index}>{a}</li>)}            
        </ul>
    </div>
  )
}
