import React, { useState } from "react";
import "../SmallCard/smallCard.css";
import * as AiIcons from "react-icons/ai";
import image from "../assets/music.jpeg";
import Carousel from "react-elastic-carousel";

import { newData } from "../AllData/Data";

function SmallCards({ name, onClick, Righticon, Lefticon }) {
  const [icon, setIcon] = useState("");

  const showIcon = (index) => {
    if (icon === index) {
      setIcon("");
    } else {
      setIcon(index);
    }
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 6 },
  ];
  return (
    <div className="mainslider">
      <div className="recently-container">
        <p className="recently-played">{name}</p>
      </div>
      <Carousel breakPoints={breakPoints}>
        {newData.map((data, index) => {
          return (
            <>
              <div className="carousel-card">
                <div className="Carousel-image">
                  <img src={image} className="sub-Image" />
                  <p className="Carousel-icon" onClick={() => showIcon(index)}>
                    {icon === index ? (
                      <AiIcons.AiFillPlayCircle size={50} />
                    ) : (
                      <AiIcons.AiFillPauseCircle size={50} />
                    )}
                  </p>
                </div>
                <div className="Carousel-about">
                  <p className="Carousel-heading">{data?.heading}</p>
                  <p className="Carousel-title">{data?.title}</p>
                </div>
              </div>
            </>
          );
        })}
      </Carousel>
    </div>
  );
}

export default SmallCards;
