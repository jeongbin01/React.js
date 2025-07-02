import React from 'react'

export const Lab2 = () => {
    // 태그를 배열에 넣고 배열을 출력
    // java 는 배열에 동일한 자료형 , javaScript 는 배열에 여러 자료형을 넣을 수 있다.
    // 배열 : [값, 값, 값] , 값 : 정수 , 실수 , 불리언, 객체

    const fruits = [<li>Apple</li>,<li>Banana</li>, <li>Orange</li>];
  return (
    <div>
        <h1>Lab2 - 배열에 엘리먼트를 넣어서 출력</h1>
        <hr />
        <ul>
            {fruits}
        </ul>
    </div>
  )
}
