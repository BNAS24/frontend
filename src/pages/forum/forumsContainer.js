import { useSidebar } from '../../context/mobilenav';
import { ForumPres } from './forumsPres';
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/auth/authSlice';

export const Forums = () => {
    const { user } = useAuth();
    const { isSidebarOpen } = useSidebar();
    const [searchState, setSearchState] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const fetchData = async () => {

            try {
                console.log('Fetching data for search term:', searchState);

                setLoading(true);

                const response = await fetch(`http://localhost:5000/api/forums/searchForums?value=${searchState}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': user?.token ? `Bearer ${user.token}` : '',
                    },
                });

                console.log('Response status:', response);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();

                console.log('Data received:', data);

                setSearchResults(data);

            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        const delayTimer = setTimeout(() => {
            if (searchState.trim() !== '') {
                fetchData();
            }
        }, 500);

        return () => {
            clearTimeout(delayTimer);
            setSearchResults(null);
        }

    }, [user, searchState]);

    return (
        <>
            <ForumPres
                isSidebarOpen={isSidebarOpen}
                searchState={searchState}
                setSearchState={setSearchState}
                searchResults={searchResults}
                loading={loading}
            />
        </>
    );
};
