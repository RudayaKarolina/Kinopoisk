import { useState, useEffect } from "react";
import Card from "../Card/Card";
import { getPremiera } from "../services/getPremiera";

export default function Premiera() {
  const [premiera, setPremiera] = useState(false);

  useEffect(() => {
    getPremieraFilms();
  }, []);

  async function getPremieraFilms() {
    const data = await getPremiera(
      new Date().getFullYear(),
      new Date(new Date().getFullYear(), new Date().getMonth() + 1)
        .toLocaleString("en-us", { month: "long" })
        .toUpperCase()
    );
    setPremiera(data);
  }

  return (
    <>
      <div className="main_content">
        {!premiera && <div>Загрузка данных...</div>}
        {premiera &&
          premiera.map((item) => (
            <div className="wrapper_cards" key={item.kinopoiskId}>
              <Card item={item} />
            </div>
          ))}
      </div>
    </>
  );
}
