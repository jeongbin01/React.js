import React from 'react'

// 영화 정보를 출력 하는 컴포넌트 : Props : title, poster_path, vote_average 
const Movie = ({title, poster_path, vote_average}) => {

    const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/"

  return (
    <div className='movie-container'>
        <img src = {IMG_BASE_URL + poster_path}  alt ="영화 포스터" /> 
        <div className='movie-info'>
            <h4>{title}</h4>
            <span>{vote_average}</span>
        </div>
    </div>
  )
}
export default Movie
