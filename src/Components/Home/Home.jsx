import fon from "../../assets/login-fon.jfif";
import "./Home.scss";
export default function Home({ posterObJ }) {
  const { poster } = posterObJ;

  return (
    <>
      <div className="wrapper-home">
        <img src={fon} alt="fon" />
      </div>
      <div className="wrapper_poster">
        <img src={poster} alt="poster" />
      </div>
    </>
  );
}
