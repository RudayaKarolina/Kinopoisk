import Card from "../Card/Card";
import { useState, useEffect } from "react";
import { getSearch } from "../services/getSearch";
import "./Search.scss";

export default function Search() {
  const [inputText, setInputText] = useState("");
  const [foundedFilms, setFoundedFilms] = useState(false);
  const [isFoundedFilms, setIsFoindedFilms] = useState(false);
  const [emptyInput, setEmptyInput] = useState(false);
  const [noFoundedFilms, setNoFoundedFilms] = useState(false);

  async function getFoundedFilms(inputText) {
    event.preventDefault();
    if (inputText === "") {
      setEmptyInput(true);
      return;
    }
    const data = await getSearch(inputText);
    if (data == "") {
      setFoundedFilms(false);
      setNoFoundedFilms(true);
      return;
    }
    setFoundedFilms(data);
    setIsFoindedFilms(true);
    setInputText("");
  }

  useEffect(() => {
    setEmptyInput(false);
    setNoFoundedFilms(false);
  }, [inputText]);

  return (
    <>
      <div className="wrapper-form">
        <form className="form-search ">
          <input
            type="text"
            name="inputText"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Введите название фильма или сериала"
            className="search_text"
          />
          <button
            className="search_btn"
            onClick={() => {
              getFoundedFilms(inputText);
            }}
          >
            Найти
          </button>
        </form>
        <div className="mistakes">
          {emptyInput && <p className="not_founded">Вы ничего не ввели!</p>}
          {noFoundedFilms && (
            <p className="not_founded">По Вашему запросу ничего не найдено!</p>
          )}
        </div>
        {isFoundedFilms && (
          <div className="founded">
            {foundedFilms &&
              foundedFilms.map((item) => (
                <div className="wrapper_premiera_cards" key={item.kinopoiskId}>
                  <Card item={item} />
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
}
