import React from 'react';
import './App.css';
import Header from './components/Header';
import MainPage from './RoutePages/MainPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import { RouterOutlined } from '@mui/icons-material';
import About from './RoutePages/About';

function App() {
  return (
    <div className="App">
      {/* *-----------------HEADER---------------*  */}
      {/* <Header />
      <MainPage /> */}
      <Header />
      <Router>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/about' element={<About />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
