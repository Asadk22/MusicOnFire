import React, { useState } from "react";
import "../SongCards/Songcard.css";
import { handleGenerate } from "../../utils/Helper";
import StoreSongs from "../../Store/MobxStore";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import Carousel from "react-elastic-carousel";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

function SongCard({ playIcon, pauseIcon }) {
  const [show, setShow] = useState("");
  const navigation = useNavigate();

  // const { state } = useLocation;

  const sendData = (res) => {
    // debugger;
    console.log("first", res);
    navigation("/albumSongs", { state: { id: res.id } });
  };

  const showIcon = (index) => {
    if (show === index) {
      setShow("");
    } else {
      setShow(index);
    }
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
  ];
  // console.log(

  //   "StoreSongs?.AllData?.new_trending?",
  //   toJS(StoreSongs?.AllData?.new_trending)
  // );
  return (
    <>
      <Carousel breakPoints={breakPoints} className="main-body">
        {StoreSongs?.AllData?.new_trending?.map((res, index) => {
          return (
            <div
              className="main"
              style={{ backgroundImage: `url(${res.image})` }}
            >
              <div onClick={() => sendData(res)}>
                <img
                  src={res?.image}
                  height="300"
                  width="310"
                  className="image"
                />
              </div>

              <div className="content-container" onClick={() => sendData(res)}>
                <div className="inner">
                  <p className="heading" style={{ color: handleGenerate() }}>
                    {res?.heading}
                  </p>
                  <p className="title">{res?.title}</p>
                  <p className="content">{res?.type}</p>
                </div>
              </div>

              <div className="playIcon">
                <div className="playicon2" onClick={() => showIcon(index)}>
                  {show === index ? playIcon : pauseIcon}
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </>
  );
}

export default observer(SongCard);
