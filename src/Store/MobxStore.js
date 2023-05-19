import { action, makeObservable, observable } from "mobx";

class StoreSongs {
  AllData = {};
  loader = false;
  album = {};
  trendingList = {};
  newAlbum = {};
  constructor() {
    makeObservable(this, {
      AllData: observable,
      loader: observable,
      album: observable,
      trendingList: observable,
      newAlbum: observable,
      setAllData: action,
      setLoader: action,
      setAlbum: action,
      setTrendingList: action,
      setNewAlbum: action,
    });
  }

  setAllData(value) {
    this.AllData = value;
    // console.log("songs----->>>>", value)
  }
  setLoader(value) {
    this.loader = value;
  }
  setAlbum(value) {
    this.album = value;
  }
  setTrendingList(value) {
    this.trendingList = value;
  }
  setNewAlbum(value) {
    this.newAlbum = value;
  }
}
export default StoreSongs = new StoreSongs();
