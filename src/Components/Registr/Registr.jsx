import { useEffect, useState } from "react";
import registrUser from "./registrUser";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser } from "../services/database";
import backImage from "../../assets/back.png";
import fon from "../../assets/login-fon.jfif";
import "./Registr.scss";

export default function Registr() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondpassword, setSecondpassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [validPass, setValidPass] = useState(false);
  const [passLength, setPassLength] = useState(false);
  const [emptyField, setEmptyfield] = useState(false);
  const [validUser, setValidUser] = useState(false);

  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setValidPass(false);
    setPassLength(false);
  }, [password, secondpassword]);

  useEffect(() => {
    setEmptyfield(false);
  }, [password, secondpassword, name, surname, email]);

  useEffect(() => {
    setValidUser(false);
  }, [password, secondpassword, name, surname, email]);

  return (
    <div className="registr_wrapper">
      <div className="background_registr">
        <img src={fon} alt="logo" className="background_fon" />
        <form className="registr_form">
          <div
            className="wrapper_back"
            onClick={() => {
              navigate("/login");
            }}
          >
            <img src={backImage} alt="backImage" className="back_image" />
          </div>
          <h2 className="registr_heading">Регистрация</h2>
          <input
            type="text"
            placeholder="Имя"
            value={name}
            className="registr_input"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Фамилия"
            value={surname}
            className="registr_input"
            onChange={(e) => setSurname(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            className="registr_input"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            className="registr_input"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Повторите пароль"
            value={secondpassword}
            className="registr_input"
            onChange={(e) => setSecondpassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="registr_button"
            onClick={() => {
              registrUser(
                {
                  email: email,
                  password: password,
                  secondpassword: secondpassword,
                  name: name,
                  surname: surname,
                },
                auth,
                createUserWithEmailAndPassword,
                setValidPass,
                setPassLength,
                setEmptyfield,
                setValidUser,
                navigate,
                addUser
              );
            }}
          >
            Зарегистрироваться
          </button>
          {validPass && <p className="valid_registr">Пароли не совпадают!</p>}
          {passLength && (
            <p className="valid_registr">
              Пароль должен содержать минимум 6 символов!
            </p>
          )}
          {emptyField && (
            <p className="valid_registr">Все поля должны быть заполнены!</p>
          )}
          {validUser && (
            <p className="valid_registr">
              Такой пользователь уже существует или введен неправильный e-mail!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
