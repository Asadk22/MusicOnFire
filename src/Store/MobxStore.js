import { action, makeObservable, observable } from "mobx";

class StoreSongs {
  AllData = {};
  loader = false;
  album = {};
  constructor() {
    makeObservable(this, {
      AllData: observable,
      loader: observable,
      album: observable,
      setAllData: action,
      setLoader: action,
      setAlbum: action,
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
}
export default StoreSongs = new StoreSongs();
