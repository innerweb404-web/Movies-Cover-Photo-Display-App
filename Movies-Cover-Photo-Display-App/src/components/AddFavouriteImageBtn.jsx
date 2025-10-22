import React, { useState } from "react";
import "../styles/components.css";

const AddFavouriteImageBtn = ({ addToFavourite, image }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  function handleClick() {
    setIsFavourite(prev => !prev);
    addToFavourite(image);
  }

  return (
    <div className="favourite-section">
      <div className="favourite-icons">
        <button className="add-to-favourite" onClick={handleClick}>
          <img
            src={`${import.meta.env.BASE_URL}assets/${
              isFavourite ? "favoriteIconShow.png" : "favouriteiconHide.png"
            }`}
            alt="favourite icon"
          />
        </button>
      </div>
    </div>
  );
};

export default AddFavouriteImageBtn;
