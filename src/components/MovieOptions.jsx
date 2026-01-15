import React from 'react'

const MovieOptions = ({ movie }) => {
  return (
    <>
        <option value={movie} key={movie.title} >{`${movie.title} (${movie.price}kr)`}</option>;
    </>
  )
}

export default MovieOptions