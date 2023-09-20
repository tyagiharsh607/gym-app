export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d298a5c1a4msh7ac51a818b4cf8dp18248fjsn9836d9853e10",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d298a5c1a4msh7ac51a818b4cf8dp18248fjsn9836d9853e10",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = response.json();
  return data;
};
