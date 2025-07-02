import React from 'react'

export const Lab5 = () => {
    const fruitName = ['사과', '바나나', '오렌지'];

    // 배열의 맵을 사용해서 엘리멘트를 처리할 때 엘리멘트에 고유한 키 값을 적용
    const fruits = fruitName.map((a, index) => {
        return <li key={index}>{a}</li>
    });

  return (
    <div>
        <h1>Lab5 - map() 을 사용해서 출력 : 고유키를 생성하며 출력</h1>
        <hr />
        <ul>
            {fruits}
        </ul>
    </div>
  )
}
