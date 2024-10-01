import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import fon from "../../assets/login-fon.jfif";
import "./Login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validUser, setValidUser] = useState(false);
  const [emptyField, setEmptyfield] = useState(false);

  const auth = getAuth();
  const navigate = useNavigate();

  function entryUser() {
    if (email === "" || password === "") {
      setEmptyfield(true);
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setValidUser(true);
        return;
      });
  }

  useEffect(() => {
    setValidUser(false);
    setEmptyfield(false);
  }, [email, password]);

    return (
    <div className="login">
      <div className="background-login">
        <img src={fon} alt="logo" className="logo"/>
        <form className="form">
          <h2 className="form_heading">Войдите или зарегистрируйтесь</h2>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            className="form_input"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
             className="form_input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={entryUser} className="form_button">
            Войти
          </button>
          <Link to="/registr" className="links registr_link">
            Зарегистрироваться
          </Link>
          <Link to="/reset" className="links">Забыли пароль?</Link>
          {emptyField && (
            <p className="valid-pass">Все поля должны быть заполнены!</p>
          )}
          {validUser && (
            <p className="valid-pass">Неверное имя пользователя или пароль!</p>
          )}
        </form>
      </div>
    </div>
  );
}
