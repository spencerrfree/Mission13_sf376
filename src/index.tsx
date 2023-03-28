import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Layout from './components/Navbar/layout';
// import About from './components/Navbar/about';

// export default function App() {
//   return (

//   );
// }
// // ReactDOM.render(<App />, document.getElementById('root'));
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement,
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
