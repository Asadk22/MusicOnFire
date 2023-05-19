import React, { useEffect, useState } from "react";
import SmallCards from "../components/SmallCard/SmallCards";
import SongCard from "../components/SongCards/SongCard";
import "../pages/Screens.css";
import * as AiIcons from "react-icons/ai";
import { AllSongs } from "../utils/Service";
import Loader from "../components/Loader/LoaderCom";
import StoreSongs from "../Store/MobxStore";
import { toJS } from "mobx";
import { observer } from "mobx-react";

const Home = () => {
  useEffect(() => {
    const init = async () => {
      await AllSongs().then((res) => {});
    };
    init();
  }, []);
  console.log("StoreSongs.loader", StoreSongs.loader);
  // console.log("alldata-->>", StoreSongs?.AllData?.new_trending);
  return (
    <>
      {StoreSongs.loader === true ? (
        <Loader />
      ) : (
        <>
          <div className="home">New Releases</div>
          <SongCard
            playIcon={<AiIcons.AiFillPlayCircle size={50} />}
            pauseIcon={<AiIcons.AiFillPauseCircle size={50} />}
          />
          <SmallCards name={"Recently Played"} />
        </>
      )}
      {/* <div className="home">New Releases</div>
      <SongCard />
      <SmallCards
        name={"Recently Played"}
        onclick={() => next()}
        Righticon={
          <AiIcons.AiOutlineArrowRight color="white" className="sub-arrow1" />
        }
        Lefticon={<AiIcons.AiOutlineArrowLeft className="sub-arrow1" />}
      /> */}

      {/* <SmallCards
        name={"Trending Now"}
        Righticon={
          <AiIcons.AiOutlineArrowRight color="white" className="sub-arrow1" />
        }
        Lefticon={<AiIcons.AiOutlineArrowLeft className="sub-arrow1" />}
      /> */}
      {/* <SmallCards name={"Top Charts"} />
      <SmallCards
        name={"Editorial Picks"}
        Righticon={
          <AiIcons.AiOutlineArrowRight color="white" className="sub-arrow1" />
        }
        Lefticon={<AiIcons.AiOutlineArrowLeft className="sub-arrow1" />}
      />
      <SmallCards
        name={"Trending Podcasts"}
        Righticon={
          <AiIcons.AiOutlineArrowRight color="white" className="sub-arrow1" />
        }
        Lefticon={<AiIcons.AiOutlineArrowLeft className="sub-arrow1" />}
      />
      <SmallCards name={"Recommended Artist Radio"} />
      <SmallCards name={"Top Genres & Moods"} /> */}
    </>
  );
};

export default observer(Home);
