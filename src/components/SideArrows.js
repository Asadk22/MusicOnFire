import React, { useState, useEffect } from "react";
import "../components/SmallCard/smallCard.css";
import * as AiIcons from "react-icons/ai";
import { useSwipeable } from "react-swipeable";

function SideArrows({ newData }) {
  const [currentIndex, setCurrentIndex] = useState(6);
  const [initial, setInitial] = useState(0);

 

  const prevPage = () => {
    if (currentIndex > 1 && initial !== 0) {
      setCurrentIndex(currentIndex - 6);
      setInitial(initial - 6);
    }
    else{
      setInitial(initial);
    }
  };
  const nextPage = () => {
    if (currentIndex < newData.length) {
      setCurrentIndex(currentIndex + 6);
      setInitial(initial + 6);
    }
  };
  console.log("first11111",currentIndex)

  return (
    <>
      <div className="sub-arrows">
        <div
          className="sub-arrowmain1"
          onClick={() => {
            prevPage()
          }}
        >
          <AiIcons.AiOutlineArrowLeft className="sub-arrow1" />
        </div>
        <div
          className="sub-arrowmain1"
          onClick={() => {
            nextPage()
          }}
        >
          <AiIcons.AiOutlineArrowRight className="sub-arrow1" />
        </div>
      </div>
    </>
  );
}

export default SideArrows;
