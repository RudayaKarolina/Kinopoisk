export async function getSerials() {
  try {
    const resp = await fetch(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_TV_SHOWS&page=1",
      {
        method: "GET",
        headers: {
          "X-API-KEY": "db642015-a328-4ea4-a9ef-fd75eeeba383",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await resp.json();
    const serials = await data.items;
    return serials;
  } catch (e) {
    console.log(e);
  }
}
