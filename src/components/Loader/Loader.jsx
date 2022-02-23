import React from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';

export const Loader = () => {
	return (
		<PacmanLoader
			size={75}
			color={'#007A78'}
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
	);
};
