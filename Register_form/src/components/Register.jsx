/*
    1. 이름
    2. 아이디
    3. 비밀번호 
    4. 주소 
    5. 자기소개
    6. 생일
    7. 전화번호
    8. 이메일 주소
 */

import React, { useState } from 'react'

export const Register = () => {
    const [name, setName] = useState("이름");
    const [id, setId] = useState("아이디");
    const [password, setPassword] = useState("비밀번호");
    const [address, setAddress] = useState("주소");
    const [bio, setBio] = useState("자기소개");
    const [birth, setBirth] = useState("생일");
    const [phone, setPhone] = useState("전화번호");
    const [email, setEmail] = useState("이메일주소");

    function onChangeName(e) {
        setName(e.target.value);
    }

    function onChangeId(e) {
        setId(e.target.value);
    }

    function onChangePassword(e) {
        setPassword(e.target.value);
    }

    function onChangeAddress(e) {
        setAddress(e.target.value);
    }

    function onChangeBio(e) {
        setBio(e.target.value);
    }

    function onChangeBirth(e) {
        setBirth(e.target.value);
    }

    function onChangePhone(e) {
        setPhone(e.target.value);
    }

    function onChangeEmail(e) {
        setEmail(e.target.value);
    } 

    return (
        <div className='register-form'>
            <h1>회원가입 폼 처리</h1>
            <hr />
            <div className='input-name'>
                <h3>이름</h3>
                <input
                    type="text"
                    placeholder="이름"
                    value={name}
                    onChange={onChangeName}
                />
            </div>
            <div className='input-id'>
                <h3>아이디</h3>
                <input
                    type="text"
                    placeholder="아이디"
                    value={id}
                    onChange={onChangeId}
                />
            </div>
            <div className='input-password'>
                <h3>비밀번호</h3>
                <input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={onChangePassword}
                />
            </div>
            <div className='input-address'>
                <h3>주소</h3>
                <input
                    type="text"
                    placeholder="주소"
                    value={address}
                    onChange={onChangeAddress}
                />
            </div>
            <div className='input-bio'>
                <h3>자기소개</h3>
                <input
                    type="text"
                    placeholder="자기소개"
                    value={bio}
                    onChange={onChangeBio}
                />
            </div>
            <div className='input-birth'>
                <h3>생일</h3>
                <input
                    type="date"
                    value={birth}
                    onChange={onChangeBirth}
                />
            </div>
            <div className='input-phone'>
                <h3>전화번호</h3>
                <input
                    type="text"
                    placeholder="전화번호"
                    value={phone}
                    onChange={onChangePhone}
                />
            </div>
            <div className='input-email'>
                <h3>이메일주소</h3>
                <input
                    type="email"
                    placeholder="이메일주소"
                    value={email}
                    onChange={onChangeEmail}
                />
            </div>
            <button onClick={() => {
                console.log(name, id, password, address, bio, birth, phone, email)}}
            >가입하기
            </button>
        </div>
    )
}
