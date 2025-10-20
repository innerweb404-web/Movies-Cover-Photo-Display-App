import React from 'react'

const MovieCard = ({image, title, alt}) => {
  return (
    <div>
        <p>{title}</p>
        <img src={`${import.meta.env.BASE_URL}${image}`} alt={alt} />
    </div>
  )
}

export default MovieCard
