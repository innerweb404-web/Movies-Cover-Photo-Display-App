import React from "react";
import "../styles/components.css";
import { useNavigate } from "react-router-dom";
import '../styles/pages.css'

const Favourite = ({ selectedItem }) => {
  const navigate = useNavigate();

  if (!selectedItem || selectedItem.length === 0) {
    return (
      <div className="empty-favourite-list">
        <h2>You Do Not Have Any Favourites</h2>
        <button className="homepage" onClick={() => navigate("/")}>
          Go to Homepage
        </button>
      </div>
    );
  }

  return (

    <>
      <h1>Your Favourite Images</h1>
      <div className="movie-list">
        {selectedItem.map((image, index) => (
          <div key={index} className="movie-info">
            <div className="movie-image">
              <img
                src={`${import.meta.env.BASE_URL}images/${image.filename}`}
                alt={image.alt}
              />
            </div>
            <h3 className="title">{image.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Favourite;
