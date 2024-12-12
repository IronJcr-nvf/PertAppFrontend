import React, { useEffect, useRef, useState } from "react";
import "../assets/styles/3DSlider.css";
import ImageTrain from '../assets/images/welcome_image.png';

const Slider = () => {
  const dragContainerRef = useRef(null);
  const spinContainerRef = useRef(null);
  const [selectedContent, setSelectedContent] = useState(null);
  const [isPaused, setIsPaused] = useState(false); // حالة للتحكم في الأنيميشن

  const images = [
    { src: ImageTrain, content: "Content for Image 1" },
    { src: ImageTrain, content: "Content for Image 2" },
    { src: ImageTrain, content: "Content for Image 3" },
    { src: ImageTrain, content: "Content for Image 4" },
    { src: ImageTrain, content: "Content for Image 5" },
    { src: ImageTrain, content: "Content for Image 6" },
  ];

  useEffect(() => {
    const spinContainer = spinContainerRef.current;
    const elements = [...spinContainer.querySelectorAll("img")];

    const init = () => {
      const totalElements = elements.length;
      elements.forEach((el, i) => {
        const angle = (i * 360) / totalElements;
        el.style.transform = `rotateY(${angle}deg) translateZ(240px)`;
        el.style.transition = "transform 1s";
      });
    };

    init();

    if (isPaused) {
      spinContainer.style.animationPlayState = "paused";
    } else {
      spinContainer.style.animationPlayState = "running";
    }
  }, [isPaused]);

  const handleMouseEnter = (content) => {
    setSelectedContent(content);
    setIsPaused(true); // توقف الأنيميشن
  };

  const handleMouseLeave = () => {
    setIsPaused(false); // تشغيل الأنيميشن
  };

  return (
    <div className="sliderbody">
      <div id="drag-container" ref={dragContainerRef}>
        <div id="spin-container" ref={spinContainerRef}>
          {images.map((img, index) => (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              key={index}
              src={img.src}
              alt={`Image ${index}`}
              onMouseEnter={() => handleMouseEnter(img.content)} // توقف الدوران عند الفأرة
              onMouseLeave={handleMouseLeave} // تشغيل الدوران عند رفع الفأرة
            />
          ))}
        </div>
        <div id="ground"></div>
      </div>
      <div className="content-display">
        {selectedContent ? (
          <div className="content-box">
            <h3>Content Details</h3>
            <p>{selectedContent}</p>
          </div>
        ) : (
          <p>Hover over an image to see its content</p>
        )}
      </div>
      
    </div>

  );
};

export default Slider;
