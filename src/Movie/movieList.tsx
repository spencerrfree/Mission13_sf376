import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';

function NewMovieList() {
  const [movieData, setMovieData] = useState<Movie[]>([]);
  // use effect helps so that the entire database isn't loaded each time, just the changes.
  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovie();
  }, []);

  return (
    <>
      <div className="row">
        <h4>The Best Movies</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>MovieID</th>
            <th>Category</th>
            <th>Title</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
            <th>Lent To</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {movieData.map((m) => (
            <tr key={m.movieId}>
              <td>{m.movieId}</td>
              <td>{m.category}</td>
              <td>{m.title}</td>
              <td>{m.director}</td>
              <td>{m.rating}</td>
              <td>{m.edited}</td>
              <td>{m.lentTo}</td>
              <td>{m.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default NewMovieList;
