import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { Products } from '../Products/Products';
import { Loader } from '../Loader/Loader';


export const ItemListContainer = () => {
	const { categoryId } = useParams();
	const { loading, productos } = Products(categoryId);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<>
					<h2
						style={{
							textAlign: 'center',
							margin: '50px',
							marginBottom: '50px',
						}}
					>
						{categoryId ? categoryId.toUpperCase() : 'NUESTROS PRODUCTOS'}
					</h2>
					<ItemList productos={productos} />
				</>
			)}
		</>
	);
};
