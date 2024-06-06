export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "9b1c75ae60msh2147bcb5463ac28p1095a4jsn09879341a63e",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5060670760msha1a255ebae18240p1efcbajsn069ea9cdc13c",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = response.json();
  return data;
};
