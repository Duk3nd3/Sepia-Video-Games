import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import './styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {

  return (

      <BrowserRouter>

        <NavBar/>

        <Routes>

          <Route path="/" element={<ItemListContainer />} />

        </Routes>

      </BrowserRouter>
  );
}

export default App;
