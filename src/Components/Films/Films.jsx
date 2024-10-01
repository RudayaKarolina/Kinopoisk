import Card from "../Card/Card";
import { useState, useEffect } from "react";
import { getFilms } from "../services/getFilms";

export default function Films() {
  const [films, setFilms] = useState(false);

  useEffect(() => {
    getAndSetFilms();
  }, []);

  async function getAndSetFilms() {
    const data = await getFilms();
    setFilms(data);
  }

  return (
    <>
      <div className="main_content">
        {!films && <p>Загрузка данных</p>}
        {films &&
          films.map((item) => (
            <div className="wrapper_cards" key={item.kinopoiskId}>
              <Card item={item} />
            </div>
          ))}
      </div>
    </>
  );
}
