import { useParams } from "react-router-dom"

// http://localhost:3000/edit/100

const Edit = () => {
    const {id} = useParams(); 

  return (
    <div>
        <h1> Edit 페이지 입니다. : path variable (/edit/100)</h1>
        <p> Edit 페이지에 오신것을 환영 합니다. </p>
        <p> useParams() 에서 불러온 값 </p>
        <h1>{id}</h1>
    </div>
  )
}

export default Edit