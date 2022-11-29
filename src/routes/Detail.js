import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import { useEffect, useState } from 'react';
import { json, useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState('');
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie);
    setGenres(json.data.movie.genres);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  });
  return (
    <div className='detail-wrapper'>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div className='detail'>
          <h2>{movie.title}</h2>
          <div className='detail-box'>
            <div className='detail-image'>
              <img src={movie.large_cover_image}></img>
            </div>
            <div className='detail-contents'>
              <p>개봉 : {movie.year}</p>
              <p>평점 : 💖{movie.rating}</p>
              <p>줄거리 : {movie.description_full}</p>
              <p calssName='genres'>
                장르 :{' '}
                <ul>
                  {genres.map((genre) => {
                    return <li>{genre}</li>;
                  })}
                </ul>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
