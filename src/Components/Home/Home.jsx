import "./Home.scss";

export default function Home({ posterObJ }) {
  const { poster } = posterObJ;

  return (
    <>
      <div className="wrapper_poster">
        <img src={poster} alt="poster" className="poster_img" />
      </div>
    </>
  );
}
