import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HomeQuiz from './components/HomeQuiz/HomeQuiz';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Level from './components/Level/Level';
import About from './components/About/About';

export interface IApplicationProps {}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomeQuiz/>}></Route>
        <Route path="level" element={<Level/>}></Route>
        <Route path="about" element={<About/>}></Route>
        {/* <Route path="play" element={<App/>}></Route> */}
        <Route path="/play/:difficulty" element={<App/>} />
        {/* <App /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);

