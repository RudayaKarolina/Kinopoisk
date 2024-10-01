import { useState, useEffect } from "react";
import Card from "../Card/Card";
import { getSerials } from "../services/getSerials";

export default function Serials() {
  const [serials, setSerials] = useState(false);

  useEffect(() => {
    getAndSetSerials();
  }, []);

  async function getAndSetSerials() {
    const data = await getSerials();
    setSerials(data);
  }

  return (
    <>
      <div className="main_content">
        {!serials && <p>Загрузка данных</p>}
        {serials &&
          serials.map((item) => (
            <div className="wrapper_cards" key={item.kinopoiskId}>
              <Card item={item} />
            </div>
          ))}
      </div>
    </>
  );
}
