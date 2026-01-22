import React from 'react'
import Movie from '../classes/MovieClass'

const MovieOptions = ({ movie }) => {

  let movieClass = new Movie(movie.title, movie.price)

  return (
    <>
        <option value={movie.id} key={movieClass.title} >{`${movieClass.title} (${movieClass.price}kr)`}</option>;
    </>
  )
}

export default MovieOptions