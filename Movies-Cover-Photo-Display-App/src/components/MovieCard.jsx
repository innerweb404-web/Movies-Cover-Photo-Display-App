import React from 'react'
import AddFavouriteImageBtn from './AddFavouriteImageBtn'
import '../styles/components.css'

const MovieCard = ({image, addToFavourite}) => {
  return (
    <>
        <div className='movie-info'>
            <div className="movie-image">
              <img src={`${import.meta.env.BASE_URL}images/${image.filename}`} alt={image.altText} />
            </div>
            <div className="imageInfo">
              <h3 className='title'>{image.title}</h3>
              <div className="rating">
                <img src={`${import.meta.env.BASE_URL}assets/ratingIcon.png`} alt="" /><span>{image.rating}</span>
              </div>
            </div>
            <AddFavouriteImageBtn
              addToFavourite={addToFavourite}
              image={image}
            />
        </div>
    </>
  )
}

export default MovieCard;
