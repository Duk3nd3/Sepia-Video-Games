import './Global.scss';

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cart } from './components/Cart/Cart';
import { Error404 } from './components/Pages/Error404';
import { CartProvider } from './components/Context/CartContext';
import { Subastas } from './components/Auction/Subastas';
import { Checkout } from './components/Checkout/Checkout';
import { ScrollButtom } from './components/Scroll/ScrollButtom';

function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<NavBar />

				<Routes>
					<Route path='/' element={<ItemListContainer />} />
					<Route
						path='/productos/:categoryId'
						element={<ItemListContainer />}  
					/>
					<Route path='/detalle/:itemId' element={<ItemDetailContainer />} />
					<Route path='/productos/subastas' element={<Subastas />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/checkout' element={<Checkout />} />
					<Route path='*' element={<Error404 />} />
				</Routes>

				<ScrollButtom />
				<Footer />

			</BrowserRouter>
		</CartProvider>
	);
}

export default App;
