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
     Routes : 
     Route :
     Link : 

*/

import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Company from "./pages/Company";
import Gallery from "./pages/Gallery";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <h1>React Ruyter</h1>
      <hr />
      <nav>
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/company">Company</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/footer">Footer</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/company" element={<Company />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
