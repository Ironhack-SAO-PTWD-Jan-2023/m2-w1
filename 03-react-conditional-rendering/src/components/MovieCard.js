import React from 'react';

function MovieCard(props) {
  const { movie, clickToDelete } = props;

  const generateMovieScoreLabel = (score) => {
    if (score > 9) {
      return <span className='green'>{score}</span>
    } else if (score < 7) {
      return <span className='red'>{score}</span>
    } else {
      return <span className='black'>{score}</span>
    }
  }

  return (
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {generateMovieScoreLabel(movie.IMDBRating)}</p>

      {/* {movie.hasOscars && <p>Got the Oscar Award!</p>}
      {!movie.hasOscars && <p>Great movie but no Oscars.</p>} */}

      {movie.hasOscars ? <p>Got the Oscar Award!</p> : <p>Great movie but no Oscars.</p>}

      <button onClick={() => clickToDelete(movie._id)} className="btn-delete">
        Delete 
      </button>
    </div>
  );
}

export default MovieCard;