import './App.css';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Movies from './components/Movies/Movies';
import TvShows from './components/TvShows/TvShows';

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <Routes>

      <Route path='/' element={<Layout/>}>
        
        <Route index element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/movies' element={<Movies/>} />
          <Route path='/tv-shows' element={<TvShows/>} />
          <Route path='*' element={<PageNotFound/>}  />
        <Route />
      
      </Route>

    </Routes>
  );
}

export default App;
