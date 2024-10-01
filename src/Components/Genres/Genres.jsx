export default function Genres({ genres }) {
  return (
    <div>
      {genres.length == 1 && <p>{genres[0].genre}</p>}
      {genres.length == 2 && (
        <p className="card_info-genre">
          {genres[0].genre}, {genres[1].genre}
        </p>
      )}
      {genres.length > 2 && (
        <p className="card_info-genre">
          {genres[0].genre}, {genres[1].genre}, {genres[2].genre}
        </p>
      )}
    </div>
  );
}
