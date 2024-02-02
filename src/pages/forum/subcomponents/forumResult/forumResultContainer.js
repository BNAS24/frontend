import { useEffect, useState } from 'react'
import { ForumResultPres } from './forumResultPres'
import { useAuth } from '../../../../context/auth/authSlice';
import { useParams } from 'react-router-dom';

export const ForumResult = () => {

    const { user } = useAuth();

    const { forumId } = useParams();

    const [forumDataState, setForumDataState] = useState(null);

    useEffect(() => {

        if (user && forumId) {

            const fetchForum = async () => {

                const response = await fetch(`http://localhost:5000/api/forums/${forumId}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });

                if (!response.ok) {

                    console.error('Error fetching forum:', response.statusText);

                }

                const forumData = await response.json();

                setForumDataState(forumData);

            };

            fetchForum();
        }

    }, [user, forumId]);

    console.log(forumId);

    console.log('forum data state', forumDataState);

    return (
        <ForumResultPres
            forumId={forumId}
            forumDataState={forumDataState}
        />
    )
}