import './App.css';
import * as React from 'react';
import NavBarComponent from './Components/Navbar/NavBarComponent';
import Movies from './Pages/Movies/Movies'
import Trending from './Pages/Trending/Trending'
import TvSeries from './Pages/TvSeries/TvSeries'
import {
  BrowserRouter, Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBarComponent/>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/series" element={<TvSeries />} />
        </Routes>

      </BrowserRouter>


    </>
  );
}

export default App;
