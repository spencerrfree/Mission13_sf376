import React, { useState } from 'react';
import './App.css';
import TopBanner from './Blah';
import MovieList from './Movies';
import { Link, Route, Routes } from 'react-router-dom';

// use this class to form the podcast page
class Podcasts extends React.Component {
  render() {
    return (
      <div>
        <h1>
          This is my amazing podcast page! Check out the Baconsale site here!
        </h1>
        <a href="https://baconsale.com/">baconsale.com</a>
      </div>
    );
  }
}

function App() {
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
