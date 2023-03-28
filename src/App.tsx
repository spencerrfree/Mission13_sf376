import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './Blah';
import MovieList from './Movies';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link, Route, Routes } from 'react-router-dom';

class Podcasts extends React.Component {
  render() {
    return (
      <div>
        <h1>
          This is my amazing podcast page. Check out the Baconsale site here!
        </h1>
        <a href="https://baconsale.com/">baconsale.com</a>
      </div>
    );
  }
}

class Conclusion extends React.Component {
  render() {
    return <p>Hope you enjoyed!</p>;
  }
}

function Rando() {
  return (
    <div>
      <h2>Random Number: {Math.random()}</h2>
    </div>
  );
}

function GoButton(props: any) {
  return (
    <div>
      <button onClick={props.blahClick}>Go!</button>
      <br />
    </div>
  );
}

function AmountOfGo(props: any) {
  return <label>{props.show}</label>;
}

// function App() {
//   const [count, setCount] = useState(0);
//   const incrementGo = () => setCount(count + 1);
//   return (
//     <div>
//       <TopBanner saying="Spencer's React Website - Main" />

//       <MovieList />
//       <Welcome />
//       <Rando />
//       <br />
//       <GoButton blahClick={incrementGo} />
//       <AmountOfGo show={count} />
//       <Conclusion />
//     </div>
//   );
// }
function App() {
  const [count, setCount] = useState(0);
  const incrementGo = () => setCount(count + 1);
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">MovieList</Link>
          </li>
          <li>
            <Link to="/podcasts">My Podcasts</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/movies" element={<MovieList />} />
        <Route
          path="/"
          element={<TopBanner saying="Joel Hilton's Mighty Quick Website" />}
        />
        <Route path="/podcasts" element={<Podcasts />} />
      </Routes>
    </>
  );
}

export default App;
