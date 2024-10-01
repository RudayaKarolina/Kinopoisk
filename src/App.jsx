import Home from "./Components/Home/Home";
import Premiera from "./Components/Premiera/Premiera";
import Nav from "./Components/Nav/Nav";
import Login from "./Components/Login/Login";
import Registr from "./Components/Registr/Registr";
import getRandom from "./Components/Common/randomFunc";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import Serials from "./Components/Serials/Serials";
import Search from "./Components/Search/Search";
import Films from "./Components/Films/Films";
import { Route, Routes } from "react-router-dom";
import { getPopular } from "./Components/services/getPopular";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import fonImage from "./assets/login-fon.jfif";
import "./style/App.scss";

function App() {
  const [poster, setPoster] = useState(null);
  const posterObJ = { poster, setPoster };
  const auth = getAuth();
  const navigate = useNavigate();

  async function getRandomPoster() {
    const data = await getPopular();
    setPoster(data.items[getRandom(0, 20)].posterUrl);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    });
  }, []);

  useEffect(() => {
    getRandomPoster();
  }, []);

  return (
    <>
      <div className="wrapper-app">
        <img src={fonImage} alt="fon-image" className="fon_image" />
      </div>
      <div className="wrapper_black_background">
        <Nav />
        <Routes>
          <Route path="/" element={<Home posterObJ={posterObJ} />} />
          <Route path="/premiera" element={<Premiera />} />
          <Route path="/serials" element={<Serials />} />
          <Route path="/films" element={<Films />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registr" element={<Registr />} />
          <Route path="/reset" element={<ResetPassword />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
