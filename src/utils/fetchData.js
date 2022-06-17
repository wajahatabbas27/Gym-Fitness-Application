export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "f510550226msh6168d0b1277d400p1e5986jsn1624aee656ed",
  },
};

export const fetchData = async (url, options) => {
  //response from url
  const response = await fetch(url, options);
  const data = response.json();

  //returning the data so it can be used in the searchExercises component
  return data;
};
