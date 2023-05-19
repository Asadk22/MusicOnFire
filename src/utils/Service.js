import client from "../Interceptor/Index";
import StoreSongs from "../Store/MobxStore";
import { getAllSongs, allAlbums } from "./urls";

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
    return await client.get(`${allAlbums}${id}`).then((res) => {
      console.log("response of album-->", JSON.stringify(res));
    });
  } catch (error) {
    console.log("album error-->", error);
  }
};
