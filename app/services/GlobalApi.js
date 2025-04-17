import axios from "axios";

const api = axios.create({
  baseURL: "https://newsapi.org/v2",
});

const apiKey = "612917e7a65447e8916c9b0157cee35c";

/**
 * Fetches top headlines from a specific country.
 *
 * @param {string} country - The country code (default is "us").
 * @returns {Promise<AxiosResponse>} Axios response containing top headlines.
 */
const getTopHeadline = (country = "us") =>
  api.get("/top-headlines", {
    params: {
      country,
      apiKey,
    },
  });

/**
 * Fetches news articles based on a given category keyword.
 *
 * @param {string} category - The category or keyword to search for.
 * @returns {Promise<AxiosResponse>} Axios response containing matching articles.
 */
const getByCategory = (category) =>
  api.get("/everything", {
    params: {
      q: category,
      apiKey,
    },
  });

const GlobalApi = {
  getTopHeadline,
  getByCategory,
};

export default GlobalApi;
