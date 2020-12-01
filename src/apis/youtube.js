import axios from "axios";

const KEY = "AIzaSyDm8O1OkDwq0rrS5qe_ggo78vzYC1vw5FI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: "5",
    key: KEY
  }
});
