export default function Country({ country }) {
  return (
    <div>
      {country.length == 1 && (
        <p className="card_info-country">{country[0].country}</p>
      )}
      {country.length == 2 && (
        <p className="card_info-country">
          {country[0].country}, {country[1].country}
        </p>
      )}
      {country.length > 2 && (
        <p className="card_info-country">
          {country[0].country}, {country[1].country}, {country[2].country}
        </p>
      )}
    </div>
  );
}
