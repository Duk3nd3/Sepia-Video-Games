import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import './styles.css';

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Arriba hay un sencillo ejemplo de NavBar"/>
    </>
  );
}

export default App;
