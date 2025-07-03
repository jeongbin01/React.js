// http://localhost:3000/edit2?id=200&mode=abc

import { useSearchParams } from "react-router-dom"

const Edit2 = () => {
    // id=200&mode=abc    ===> searchParams
    const [searchParams, setSearchParams] = useSearchParams(); 

    console.log(searchParams);
    // searchParms 에 들어 있는 값을 끄집어 내서 변수에 저장 
    const id = searchParams.get("id"); 
    const mode = searchParams.get("mode"); 

    // 콘솔에 출력 
    console.log(id); 
    console.log(mode)


  return (
    <div>
        <h1> Edit2 페이지 입니다. : Query String (edit2?id=2003&mode=abc)</h1>
        <p> Edit2 페이지에 오신것을 환영 합니다. </p>
        <p> useSearchParams() 에서 불러온 값 </p>
        <h1>{id}</h1>
        <h1>{mode}</h1>

    </div>
  )
}

export default Edit2