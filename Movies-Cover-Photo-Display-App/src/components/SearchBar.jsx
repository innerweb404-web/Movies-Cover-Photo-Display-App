import React from 'react'

const SearchBar = () => {
  return (
    <>
    <div className='search-section'> 
        <div className="search-bar">
            <div>
                <input type="search" name="search" id="search" />
            </div>
            <div className='search-figure'>
                <img src={`${import.meta.env.BASE_URL}assets/Search-Icon.png`} />
            </div>
      </div>
    </div>
    </>
  )
}

export default SearchBar
