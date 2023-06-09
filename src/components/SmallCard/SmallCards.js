import React, { useEffect, useState } from "react";
import "../SmallCard/smallCard.css";
import * as AiIcons from "react-icons/ai";
import image from "../assets/music.jpeg";
import Carousel from "react-elastic-carousel";
import { newData } from "../AllData/Data";
import { observer } from "mobx-react";
import StoreSongs from "../../Store/MobxStore";
import { toJS } from "mobx";
import { useNavigate } from "react-router";
import { playListData } from "../../utils/Service";
import LoaderCom from "../Loader/LoaderCom";

function SmallCards({ name, onClick, Righticon, Lefticon }) {
  const [icon, setIcon] = useState("");

  const navigation = useNavigate();

  const showIcon = (index) => {
    if (icon === index) {
      setIcon("");
    } else {
      setIcon(index);
    }
  };

  const sendData = (res) => {
    console.log("first", res);
    navigation("/trendingInside", { state: { id: res.id } });
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
        {StoreSongs?.AllData?.top_playlists?.map((data, index) => {
          // console.log("data small card-->>", data);
          return (
            <>
              <div className="carousel-card">
                <div className="Carousel-image">
                  <img
                    src={data?.image}
                    className="sub-Image"
                    onClick={() => sendData(data)}
                  />

                  <p className="Carousel-icon" onClick={() => showIcon(index)}>
                    {icon === index ? (
                      <AiIcons.AiFillPlayCircle size={50} />
                    ) : (
                      <AiIcons.AiFillPauseCircle size={50} />
                    )}
                  </p>
                </div>
                <div className="Carousel-about">
                  <p className="Carousel-heading">{data?.title}</p>
                  <p className="Carousel-title">{data?.type}</p>
                </div>
              </div>
            </>
          );
        })}
      </Carousel>
    </div>
  );
}

export default observer(SmallCards);
