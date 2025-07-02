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

const Register = () => {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [bio, setBio] = useState('');
  const [birth, setBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log({ name, userId, password, address, bio, birth, phone, email });
    // 실제 가입 처리 로직은 여기!
  };

  return (
    <div className="register-form">
      <h1>회원가입 폼 처리</h1>
      <hr />

      <div className="input-name">
        <h3>이름</h3>
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div className="input-id">
        <h3>아이디</h3>
        <input
          type="text"
          placeholder="아이디"
          value={userId}
          onChange={e => setUserId(e.target.value)}
        />
      </div>

      <div className="input-password">
        <h3>비밀번호</h3>
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <div className="input-address">
        <h3>주소</h3>
        <input
          type="text"
          placeholder="주소"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
      </div>

      <div className="input-bio">
        <h3>자기소개</h3>
        <textarea
          placeholder="자기소개"
          value={bio}
          onChange={e => setBio(e.target.value)}
          rows={4}
        />
      </div>

      <div className="input-birth">
        <h3>생일</h3>
        <input
          type="date"
          value={birth}
          onChange={e => setBirth(e.target.value)}
        />
      </div>

      <div className="input-phone">
        <h3>전화번호</h3>
        <input
          type="text"
          placeholder="010-0000-0000"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </div>

      <div className="input-email">
        <h3>이메일 주소</h3>
        <input
          type="email"
          placeholder="example@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <button type="button" onClick={handleSubmit}>
        가입하기
      </button>
    </div>
  );
};

export default Register
