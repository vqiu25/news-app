import axios from "axios";

const api = axios.create({
  baseURL: "https://newsapi.org/v2",
});

const apiKey = "";

const getTopHeadline = (country = "us") =>
  api.get("/top-headlines", {
    params: {
      country,
      apiKey,
    },
  });

const GlobalApi = {
  getTopHeadline,
};

export default GlobalApi;
