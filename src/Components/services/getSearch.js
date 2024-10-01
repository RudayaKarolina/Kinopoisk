export async function getSearch(word) {
  try {
    const resp = await fetch(
      `    https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&keyword=${word}&page=1`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": "db642015-a328-4ea4-a9ef-fd75eeeba383",
          "Content-Type": "application/json",
        },
      }
    );
    const films = await resp.json();
    const items = await films.items;
    return items;
  } catch (e) {
    console.log(e);
  }
}
