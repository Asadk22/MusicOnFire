// BASE URL
export const API_BASE_URL = "https://music-on-fire.vercel.app";

// Full url
export const getSongsUrl = (endpoint) => API_BASE_URL + endpoint;
export const getPlayListUrl = (endpoint) => API_BASE_URL + endpoint;

// AllSongs
export const getAllSongs = getSongsUrl("/api/v1/getlaunchdata");
export const allAlbums = getSongsUrl("/api/v1/getAlbumDetails?aid=");
export const allPlaylist = getPlayListUrl("/api/v1/getPlaylistDetails?pid=");
