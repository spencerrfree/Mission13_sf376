import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './Blah';
import MovieList from './Movies';

class Welcome extends React.Component {
  render() {
    return <h1>This website gives some random numbers</h1>;
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

function App() {
  const [count, setCount] = useState(0);
  const incrementGo = () => setCount(count + 1);
  return (
    <div>
      <TopBanner saying="Spencer's React Website - Main" />

      <MovieList />
      <Welcome />
      <Rando />
      <br />
      <GoButton blahClick={incrementGo} />
      <AmountOfGo show={count} />
      <Conclusion />
    </div>
  );
}

export default App;
