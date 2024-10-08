export async function getFilms() {
  try {
    const resp = await fetch(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=1",
      {
        method: "GET",
        headers: {
          "X-API-KEY": "db642015-a328-4ea4-a9ef-fd75eeeba383",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await resp.json();
    const films = await data.items;
    return films;
  } catch (e) {
    console.log(e);
  }
}
