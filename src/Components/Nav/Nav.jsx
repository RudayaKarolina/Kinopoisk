import { NavLink } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import exit from "../../assets/logout.png";
import "./Nav.scss";

export default function Nav() {
  const auth = getAuth();
  const navigate = useNavigate();

  function exitUser() {
    signOut(auth).then(() => {
      navigate("/login");
    });
  }

  return (
    <div className="navigation">
      <div className="wrapper_logo" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" className="nav_logo"/>
      </div>
      <div className="links">
        <NavLink to="/premiera" className="one_link">Премьеры</NavLink>
        <NavLink to="/films" className="one_link">Фильмы</NavLink>
        <NavLink to="/serials" className="one_link">Сериалы</NavLink>
        <NavLink to="/search" className="one_link">Поиск</NavLink>
      </div>
      <div className="wrapper_user">
        <div className="user" onClick={exitUser}>
          <img src={exit} alt="exit" />
        </div>
      </div>
    </div>
  );
}
