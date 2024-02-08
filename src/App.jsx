import React, { useState } from 'react';

const App = ({ images }) => {
    const [displayedImage, setDisplayedImage] = useState(images[0]);

    const handleImageClick = (src) => {
        setDisplayedImage(src);
    };

    const handleNextImage = () => {
        const currentIndex = images.findIndex(image => image === displayedImage);
        const nextIndex = (currentIndex + 1) % images.length;
        setDisplayedImage(images[nextIndex]);
    };

    const handlePrevImage = () => {
        const currentIndex = images.findIndex(image => image === displayedImage);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setDisplayedImage(images[prevIndex]);
    };

    return (
        <div className="container" style={{ overflow: 'auto' }}>
            <div className="opshi_cart">
                <div className="katta_rasm">
                    {/* ///////////////////////////////////////////// katta rasm && btn */}
                    <div className="prev btn" onClick={handlePrevImage}>{`<`}</div>
                    <img src={displayedImage} alt="Displayed" />
                    <div className="next btn" onClick={handleNextImage}>{`>`}</div>
                </div>
                <div className="kischik_rasm">
                    {/* ///////////////////////////////////////////////// past kichik rasmlar */}
                    {images.map((image, index) => (
                        <button className="btn_img" key={index}>
                            <img className="btn_img" src={image} alt={`Image ${index}`} onClick={() => handleImageClick(image)} />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
