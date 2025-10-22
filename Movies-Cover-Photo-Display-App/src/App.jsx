import React, { useState } from 'react'
import movieImages from './data/data'
import './styles/App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Favourite from './pages/Favourite'
import SearchBar from './components/SearchBar'


const App = () => {
  const [images] = useState(movieImages)
  const [selectedItem, setSelectedItem] = useState([])

  function addToFavourite(image){
    setSelectedItem(prev =>{
      const exists = prev.some(fav => fav.id === image.id);
      return exists ? prev : [...prev, image]
    })
  }
  return (
    <>
      <Navbar />
      <div className='page-content'>
        <Routes>
          <Route path='/' element={<Home 
            images={images}
            selectedItem ={selectedItem}
            addToFavourite={addToFavourite}
          />}/>
          <Route path='/favourite' element={<Favourite
          selectedItem={selectedItem}/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
