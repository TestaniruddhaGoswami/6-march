import React, { useState } from "react";
import "./Component1.css"

export function Component1() {
  const [index, setIndex] = useState(0);
  const images = [
    "https://i0.wp.com/www.indiatravelogue.com/mindscape/wp-content/uploads/2018/10/Sunset.jpg?fit=3264%2C2448&ssl=1",
    "https://bnomadic.files.wordpress.com/2014/02/5-17.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRxCsaLjqiLoL6wV1T6J6i2wgXkKRmzLmG54kSAM60321rO-AoucRRTPGs9BzumKmjR7U&usqp=CAU"
  ];

  function handleChangeImage() {
    setIndex((index + 1)%images.length);
  }

  return (
    <>
      <h1 className='Header'>IMAGE CHANGER UI-1</h1>
    <div className="container1">
    
      <div className="Images-container">
        <img src={images[index]} className="Images"alt={`Imge ${index}`} />
      </div>
      <div className="Button-container">
        <button className="Button" onClick={handleChangeImage}>Change Pic</button>
      </div>
    </div>
    </>
  );
}