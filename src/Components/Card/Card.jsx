import { useState } from "react";
import Country from "../Country/Country";
import Genres from "../Genres/Genres";
import heart from "../../assets/heart.png";
import star from "../../assets/star.png";
import "./Card.scss";

export default function PremieraCard({ item }) {
  const [isFav, setIsFav] = useState(false);
  const [noFav, setNoFav] = useState(true);

  function markFavorite() {
    setIsFav(true);
    setNoFav(false);
  }
  function cancelFavoirite() {
    setIsFav(false);
    setNoFav(true);
  }
  
  return (
    <div className="wrapper_card">
      <div className="card_image">
        <img src={item.posterUrl} alt="card_poster" className="card_poster" />
      </div>
      <div className="card_info">
        <h2 className="card_info-nameRu">{item.nameRu}</h2>
        {item.nameEn ? (
          <p className="card_info-nameEn">
            {item.nameEn}, {item.year}
          </p>
        ) : (
          <p className="card_info-year">{item.year}</p>
        )}
        <Country country={item.countries} />
        <Genres genres={item.genres} />
        {noFav && (
          <img
            src={heart}
            alt="heart"
            className="img_heart"
            onClick={markFavorite}
          />
        )}
        {isFav && (
          <img
            src={star}
            alt="star"
            className="img_star"
            onClick={cancelFavoirite}
          />
        )}
      </div>
    </div>
  );
}
