import React, { useState, useEffect } from "react";
import "../AlbumScreen/AlbumSong.css";
import albumImage from "../assets/recentmusic6.webp";
import { AlbumData, playListData } from "../../utils/Service";
import { useLocation } from "react-router";
import { observer } from "mobx-react";
import StoreSongs from "../../Store/MobxStore";
import * as AiIcons from "react-icons/ai";
import { toJS } from "mobx";
import Loader from "../Loader/LoaderCom";

function TrendingInsideCustom(props) {
  const [songPlay, setSongPlay] = useState("");
  const [change, setChange] = useState("");
  const receive = useLocation();

  useEffect(() => {
    playListData(receive.state.id);
    // console.log("state data-->", receive.state);
    // console.log(
    //   "storesongs-->>>>>>>",
    //   toJS(StoreSongs?.trendingList?.data?.data?.list)
    // );
  }, [props]);

  const Play = (index) => {
    if (songPlay === index) {
      setSongPlay("");
    } else {
      setSongPlay(index);
    }
  };
  // console.log("StoreSongs.loader", StoreSongs.loader);

  return (
    <>
      {StoreSongs.loader ? (
        <Loader />
      ) : (
        <div className="page-main-div">
          <div className="Album-main">
            <div className="Album-Container">
              <div>
                <img
                  src={change?.image}
                  width="310"
                  height="300"
                  className="Albumimage"
                />
              </div>
              <div className="album-mid-container">
                <div className="song-Name">{change?.title}</div>
                <div className="album-detail">
                  <span>singer name</span>
                  <span>album quantity</span>
                  <span>duration</span>
                </div>
              </div>
            </div>
          </div>
          <div className="second-main">
            {StoreSongs?.trendingList?.data?.data?.list.map((res, index) => {
              return (
                <>
                  <div
                    className="second-container"
                    onClick={() =>
                      setChange({ image: res?.image, title: res?.title })
                    }
                  >
                    <div className="second-c-first">
                      <div className="album-image">
                        <img
                          src={res?.image}
                          height="50px"
                          width="50px"
                          className="album-image"
                        />
                      </div>
                      <div className="album-title">{res?.title}</div>
                      {/* <div className="album-title">{res?.subtitle}</div> */}
                    </div>
                    <div className="album-icon" onClick={() => Play(index)}>
                      {songPlay === index ? (
                        <AiIcons.AiFillPauseCircle size={50} />
                      ) : (
                        <AiIcons.AiFillPlayCircle size={50} />
                      )}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default observer(TrendingInsideCustom);
