import { toJS } from "mobx";
import client from "../Interceptor/Index";
import StoreSongs from "../Store/MobxStore";
import { getAllSongs, allAlbums, allPlaylist } from "./urls";

// const param = useParams();
export const AllSongs = async () => {
  try {
    StoreSongs.setLoader(true);
    return await client
      .get(getAllSongs)
      .then((res) => {
        StoreSongs.setAllData(res.data.data);
        StoreSongs.setLoader(false);
        return res;
      })
      .catch((Error) => {
        StoreSongs.setLoader(false);
        // console.log("Error", Error);
        return Error;
      });
  } catch (error) {
    StoreSongs.setLoader(false);
    // console.log("catch error", error);
  }
};

export const AlbumData = async (id) => {
  try {
    StoreSongs.setLoader(true);
    return await client.get(`${allAlbums}${id}`).then((res) => {
      StoreSongs.setAlbum(res);
      StoreSongs.setLoader(false);
      // console.log(
      //   "response of album-->",
      //   toJS(StoreSongs?.album?.data?.data?.title)
      // );
    });
  } catch (error) {
    StoreSongs.setLoader(false);
    console.log("album error-->", error);
  }
};

export const playListData = async (id) => {
  try {
    StoreSongs.setLoader(true);
    return await client.get(`${allPlaylist}${id}`).then((res) => {
      StoreSongs.setTrendingList(res);
      StoreSongs.setLoader(false);
      // console.log("response of allPlaylist-->", toJS(StoreSongs.trendingList));
    });
  } catch (error) {
    StoreSongs.setLoader(false);
    console.log("allPlaylist error-->", error);
  }
};
