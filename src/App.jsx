import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
import './Global.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Consolas } from './components/Pages/Consolas';
import { Cartuchos } from './components/Pages/Cartuchos';
import { Arcades } from './components/Pages/Arcades';
import { Contacto } from './components/Pages/Contacto';
import { Error404 } from './components/Pages/Error404';


function App() {

    return (

        <BrowserRouter>

            <NavBar/>

            <Routes>
                <Route path='/' element={ <ItemListContainer/> }/>
                <Route path='/productos/:categoryId' element={ <ItemListContainer/> }/>
                <Route path='/detalle/:itemId' element={ <ItemDetailContainer/> }/>
                <Route path='/consolas' element={ <Consolas/> }/>
                <Route path='/cartuchos' element={ <Cartuchos/> }/>
                <Route path='/arcades' element={ <Arcades/> }/>
                <Route path='/contacto' element={ <Contacto/> }/>

                <Route path='*' element={ <Error404 /> } />

            </Routes>

            {/* <Footer /> */}
        </BrowserRouter>
    );
}

export default App;
