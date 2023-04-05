import { useState } from 'react';
import { Movie } from '../types/movie';

function NewMovieList() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  const fetchMovie = async () => {
    const rsp = await fetch('https://localhost:44354/movie');
    const temp = await rsp.json();
    setMovieData(temp);
  };

  fetchMovie();
  return (
    <>
      <div className="row">
        <h4>The Best Movies</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Director</th>
          </tr>
        </thead>
        <tbody>
          {movieData.map((m) => (
            <tr key={m.movieId}>
              <td>{m.title}</td>
              <td>{m.director}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default NewMovieList;
