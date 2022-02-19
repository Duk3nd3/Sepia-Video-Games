import { ItemList } from '../ItemList/ItemList';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { useParams } from 'react-router-dom';
import { Products } from '../Products/Products';

export const ItemListContainer = () => {
	const { categoryId } = useParams();
	const { loading, productos } = Products(categoryId);

	return (
		<>
			{loading ? (
				<PacmanLoader
					size={75}
					color={'#007A78'}
					loading={loading}
					css={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '15vh',
						width: '15vw',
						marginTop: '375px',
						marginBottom: '375px',
						marginLeft: '800px',
					}}
				/>
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
