import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({id, title, summary, coverImg, genres}) {
  return (
    <div className="item">
      <Link to={`/movie/${id}`}>
        <div className="img">
          <img src={coverImg} alt="coverImg"/>
        </div>
        <h2>{title}</h2>
      </Link>
      <p>{summary.length > 235 ? `${summary.slice(0,235)}...` : summary}</p>
      <ul>
        {genres.map((genre, i) => (
          <li className="genre" key={i}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;
