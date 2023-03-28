import { useState } from 'react';
import data from './MovieData.json';

const mds = data.MovieData;

function MovieList() {
  const [listOMovies, setListOMovies] = useState(mds);

  const addMovie = () => {
    setListOMovies([
      ...mds,
      {
        Category: 'Comedy',
        Title: 'Sweet Home Alabama',
        Year: 1988.978303,
        Director: 'Andy Tennant',
        Rating: 'PG-13',
        Edited: 'Yes',
      },
    ]);
  };
  return (
    <>
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {listOMovies.map((m) => (
              <tr key={m.Title}>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn btn-primary" onClick={addMovie}>
          Add Movie
        </button>
      </div>
    </>
  );
}

export default MovieList;
