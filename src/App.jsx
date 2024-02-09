import React, { useState } from "react";

const App = () => {
  const [displayedImage, setDisplayedImage] = useState("");
  const images = [
    "src/images/img_1.jpg",
    "src/images/img_2.jpg",
    "src/images/img_3.webp",
    "src/images/img_4.webp",
    "src/images/img_5.webp",
    "src/images/img_6.webp",
  ];

  const handleImageClick = (src) => {
    setDisplayedImage(src);
  };

  const handleNextImage = () => {
    const currentIndex = images.findIndex((image) => image === displayedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setDisplayedImage(images[nextIndex]);
  };

  const handlePrevImage = () => {
    const currentIndex = images.findIndex((image) => image === displayedImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setDisplayedImage(images[prevIndex]);
  };

  return (
    <div className="container">
      <div className="opshi_cart">
        <div className="katta_rasm">
          {/* ///////////////////////////////////////////// katta rasm && btn */}
          <div className="prev btn" onClick={handlePrevImage}>{`<`}</div>
          <img src={displayedImage || images[0]} alt="Displayed" />
          <div className="next btn" onClick={handleNextImage}>{`>`}</div>
        </div>
        <div className="kischik_rasm">
          {/* ///////////////////////////////////////////////// past kichik rasmlar */}
          {images.map((image, index) => (
            <button className="btn_img" key={index}>
              <img
                className="btn_img"
                src={image}
                alt={`Image ${index}`}
                onClick={() => handleImageClick(image)}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
