// React Ruyter   : Link 요청에 대해서 해당 페이지를 처리해주는 기능
/*
  SPA : Single Page Application : Link  <== 컴포넌트, 페이지(컴포넌트의 몪음)를 호출
    React , Vue , Angular <== Client Side Rendering , JSON으로 서버에서 값을 받아온다. 
  MPA : Multi Page Application  : a <== 전체 페이지를 호출 
    JSP , ThymeLeaf , React   <== Server Side Rendering(WAS : 톰켓)

  Router 설치 : npm install react-router-dom          <=== 5.x , 6.x , 7.x (현재)
    설치 이후 확인 : package.json => dependencies 확인

  Router 셋팅 :
     BrowserRouter : 리액트의 모든 컴포넌트를 처리하는 곳에서 감싸줘야 함 , 
                      ex) main.js , main.jsx
     Routes : 라우트들을 그룹핑하는 컴포넌트
     Route : 경로에 따라 보여줄 컴포넌트를 정의
     Link : 페이지 새로고침 없이 이동할 수 있는 링크
     useNavigate() : 이벤트가 발생할 때 특정 페이지 이동 (location.href = "/") <= 전체 페이지
      - 원하는 컴포넌트 , 페이지만 호출

*/

import { Link } from "react-router-dom";
import { Router } from "./route/Router";
import { useNavigate } from "react-router-dom";


function App() {
  // useNavigate() 혹 사용
  const navigate = useNavigate();

  return (
    <>
    <h1>React Ruyter</h1>
      <hr />
      <nav>
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Company">Company</Link></li>
          <li><Link to="/Gallery">Gallery</Link></li>
          <li><Link to="/Footer">Footer</Link></li>
          <li>==========useNavigate()를 이용한 이벤트 이동==========</li>
          <li>
            <button onClick={() => navigate("/Home")}>홈으로 이동</button>
          </li>
          <li>
            <button onClick={() => navigate("/About")}>소개로 이동</button>
          </li>
          <li>
            <button onClick={() => navigate("/Company")}>회사로 이동</button>
          </li>
          <li>
            <button onClick={() => navigate("/Gallery")}>갤러리로 이동</button>
          </li>
          <li>
            <button onClick={() => navigate("/Footer")}>푸터로 이동</button>
          </li>
        </ul>
      </nav>
      <Router></Router>  
    </>
  );
}

export default App;
