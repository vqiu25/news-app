import axios from "axios";

const api = axios.create({
  baseURL: "https://newsapi.org/v2",
});

const apiKey = "612917e7a65447e8916c9b0157cee35c";

const getTopHeadlines = (country = "us") =>
  api.get("/top-headlines", {
    params: {
      country,
      apiKey,
    },
  });

export default getTopHeadlines;
