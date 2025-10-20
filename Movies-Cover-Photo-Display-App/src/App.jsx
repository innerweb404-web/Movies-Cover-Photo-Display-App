import React from 'react'
import AddFavouriteImageBtn from './components/AddFavouriteImageBtn'
import movieImages from './data/data'
import MovieCard from './components/MovieCard'


const App = () => {
  
  return (
    <div>
      <AddFavouriteImageBtn />
      
      {movieImages.map(image => (
        <MovieCard 
        key={image.id}
        title = {image.title}
        alt = {image.altText}
        image = {image.filename}
        />
      ))}
    </div>
  )
}

export default App
