import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Stayl from './App.module.css';
import Main from './components/main/main';
import Catalog from './components/catalog/catalog';
import CardPage from './components/catalog/cardPage/cardPage';

function App() {
  return (
    <BrowserRouter >
    <div className={Stayl.app}>
      <nav className={Stayl.nav}>
        <Link className={Stayl.link} to="./main">Главная</Link>
        <Link className={Stayl.link} to="./catalog">каталог</Link>
      </nav>
      <Routes>
        <Route path='/main' element={<Main />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/catalog/:id' element={<CardPage />}/>
      </Routes>
      


      
    </div>
    </BrowserRouter>
  );
}

export default App;
