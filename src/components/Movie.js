import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({title, summary, coverImg, genres}) {
  return (
    <div>
      <img src={coverImg} alt="coverImg"/>
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre, i) => (
          <li key={i}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;
