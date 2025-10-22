import React from 'react'
import MovieCard from '../components/MovieCard'
import '../styles/components.css'
import '../styles/pages.css'
import SearchBar from '../components/SearchBar'

const Home = ({images, addToFavourite}) => {
  
  return (
    <div className='homepage'>
      <h1 className='welcome-message'>WELCOME TO MOVIE LIST.</h1>
      <SearchBar/>
      <div className='movie-list'>
        {images.map(image => (
          <MovieCard 
          key={image.id}
          image = {image}
          addToFavourite={addToFavourite}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
