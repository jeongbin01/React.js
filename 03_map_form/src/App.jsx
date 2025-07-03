import React from 'react'
import { Lab1 } from './components/Lab1'
import { Lab2 } from './components/Lab2'
import { Lab3 } from './components/Lab3'
import { Lab4 } from './components/Lab4'
import { Lab5 } from './components/Lab5'
import { Lad6 } from './components/Lad6'
import Movie from './components/Movie'
import { dumy } from './Dumy'
import './App.css'
import Register from './components/Register'
import Register2 from './components/Register2'

function App() {
  return (
    <>
    <Lab1 />
    <Lab2 />
    <Lab3 />
    <Lab4 />
    <Lab5 />
    <Lad6 />
    
    <h1> JONS 파일에서 영화 정보를 불러와서 출력 </h1>
    <hr /> 

    <div className='app-container'>
    {
      dumy.results.map((item) => {
        return <Movie
        title = {item.title}
        poster_path = {item.poster_path}
        vote_average = {item.vote_average}
        />
      })
    }
    </div>

    <Register />
    <Register2 />
    </>
  )
}

export default App
