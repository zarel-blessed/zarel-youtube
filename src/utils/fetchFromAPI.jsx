import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com/";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "f8416aa6bdmsh2f5a8c206979047p185ac2jsn93feb205b91d",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}${url}`, options);
  return data;
};
