export async function getPremiera(year, month) {
  try {
    const resp = await fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${year}&month=${month}`,
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
