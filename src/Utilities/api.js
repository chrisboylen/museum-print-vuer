export const getMuseumData = async () => {
  const key = process.env.VUE_APP_HAM_KEY
  const url = `https://api.harvardartmuseums.org/object?classification=Prints&q=totalpageviews:1&fields=primaryimageurl,people,technique,century,culture&size=30&apikey=${key}`;
  const response = await fetch(url);
  return response.json();
};
