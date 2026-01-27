import React from 'react'
import Movie from '../classes/MovieClass'

const MovieOptions = ({ movie }) => {


  return (

    <option value={movie.id} key={movie.title} >{`${movie.title} (${movie.price}kr)`}</option>

  )
}

export default MovieOptions