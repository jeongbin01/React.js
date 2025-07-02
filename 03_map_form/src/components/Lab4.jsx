import React from 'react'

export const Lab4 = () => {
    const fruitName = ['사과', '바나나', '오렌지'];
    
    const fruits = fruitName.map((index) => {
        return <li>{index}</li>
    });

    // const fruits = [<li>Apple</li>,<li>Banana</li>, <li>Orange</li>];

  return (
    <div>
      <h1>Lab4 - map() 함수(메소드)를 이용해서 처리</h1>
      <hr />
      <ul>
        {fruits}
      </ul>
    </div>
  )
}
