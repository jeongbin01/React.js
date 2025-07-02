
// 간단한 회원 가입 폼 태그 기본 작동 <= useState()를 사용해서 처리함. ==> axios => json => 서버로 전송
/*
    1. 이름         : input type=text 
    2. 생년월일      : input type=date 
    3. 국적         : <select> <option> </option></select>
    4. 자기소개      : <textarea /> 
*/

import { useState } from "react"

const Register = () => {
// 상태(state, 값) 선언, 상태가 변경되면 자동으로 JSX가 랜더링됨  
const [name, setName] = useState("이름"); 
const [birth, setBirth] = useState(""); 
const [country, setCountry] = useState(""); 
const [bio, setBio] = useState(""); 

// JavaScript 에서 함수를 3가지 방법으로 생성 할 수 있다.  ES6 (2015) <== 많은 변화. 
// 1. 순수 함수 선언  : 1. 함수 선언식 (Function Declaration)
function onChangeName (e) {
    // console.log("이름 호출됨");
    // console.log(e);
    setName(e.target.value);
    
    
}; 

// 2. 상수 에 함수를 처리 :  2. 함수 표현식 (Function Expression)
const onChangeBirth = function (e) {
    setBirth(e.target.value);
}

// 3. 화살표 함수    <=== 근래에 제일 많이 사용하는 함수 표현 방식  
const onChangeCountry = (e) => {
    setCountry(e.target.value);

}

const onChangeBio = (e) => {
    setBio(e.target.value);
}


  return (
    <div>
        <h1> 간단한 회원 가입 폼 처리 </h1>
        <hr /> 
        <div>
            <input
                value={name}
                onChange={onChangeName}
                placeholder="이름을 입력 하세요"
            />
        </div>
        <p />
        <div>
            <input type="date" 
                value={birth}
                onChange={onChangeBirth}
                
            /> 

        </div>
        <p />
        <div>
            value={country}
            <select onChange={onChangeCountry}>
                <option value={""}></option>
                <option value={"kr"}>한국</option>
                <option value={"us"}>미국</option>
                <option value={"jp"}>영국</option>
                
            </select>
        </div>
        <p />
        <div>
            <textarea 
                value={bio}
                onChange={onChangeBio}
            /> 
        </div>
        <button onClick={() => {
            console.log(name, birth, country, bio);}}
        >가입처리
        </button>

    </div>
  )
}

export default Register