import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAV0HlLW4UCChviH5di7WD_2_3KN2RqqBQ',
	authDomain: 'sepia-video-games-f4c0d.firebaseapp.com',
	projectId: 'sepia-video-games-f4c0d',
	storageBucket: 'sepia-video-games-f4c0d.appspot.com',
	messagingSenderId: '899413187139',
	appId: '1:899413187139:web:3b5c2471c67e285d57d2f6',
};

const app = initializeApp(firebaseConfig);
export const ddbb = getFirestore(app);
