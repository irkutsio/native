import { collection, query, where } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from '../firebaseConfig';

export function useComments(postId) {
    
	const q = query(collection(db, 'comments'), where('postId', '==', postId));
	const [comments, loading, error] = useCollectionData(q);

	if (error) throw error;

	return { comments, loading };
}
