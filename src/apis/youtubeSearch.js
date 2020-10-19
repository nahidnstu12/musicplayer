import axios from "axios";

// put your api keys in .env file you can get those here - https://developers.google.com/youtube/v3/getting-started

export const selectRandomKey = () => {
  const keys = process.env.REACT_APP_YouTube_Keys.split(" "); //we are splitting the api keys to make an array
  const random = Math.floor(Math.random() * Math.floor(keys.length)); //this will get a random number
  return keys[random];
};
// https://cors-anywhere.herokuapp.com/

// create axios object
export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    videoCategoryId: "10",
    type: "video",
    // maxResults: 25,
    // key: selectRandomKey()
    // key:"AIzaSyCHhmQByh7jiD45NTShA6kF2KEjk-tZSPw" //youtube api key
    key:"AIzaSyBCqukaH8emuZ33VWrD6LmaJI7TFClqutY" //2nd api key
  }
});
