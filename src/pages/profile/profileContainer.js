import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/authSlice';
import { useSidebar } from '../../context/mobilenav';
import { ProfilePres } from './profilePres';


export const Profile = () => {

    const { user, isLoading } = useAuth();

    const navigate = useNavigate();

    const [checkedUserStatus, setCheckedUserStatus] = useState(false);

    const { isSidebarOpen } = useSidebar();

    const [isModalOpen, setModalOpen] = useState(null);

    const [isBadgesOpen, setBadgesOpen] = useState(false);

    const [extraUserData, setExtraUserData] = useState(null);

    useEffect(() => {

        if (isLoading) {
            return;
        }

        if (!user) {

            if (!checkedUserStatus) {

                setCheckedUserStatus(true);

                return;
            }
            navigate('/login');
        }

    }, [user, isLoading, checkedUserStatus, navigate]);

    useEffect(() => {

        if (user?.token && user?._id) {

            const getUserDetails = async () => {

                try {

                    const response = await fetch(`http://localhost:5000/api/users/me/${user._id}`, {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${user.token}`
                        },
                    });

                    if (!response.ok) {
                        console.error('Error fetching user details:', response.statusText);
                    };

                    const userData = await response.json();

                    setExtraUserData(userData);

                } catch (error) {
                    console.error(error);
                };
            };

            getUserDetails();
        };

    }, [user, setExtraUserData]);

    const handleOpenModal = (postKey) => {
        setModalOpen(postKey)
    };

    const handleCloseModal = () => {
        setModalOpen(null)
    };

    const handleBadges = () => {
        setBadgesOpen(!isBadgesOpen)
    };

    return (
        <>
            <ProfilePres
                user={user}
                extraUserData={extraUserData}
                isSidebarOpen={isSidebarOpen}
                isModalOpen={isModalOpen}
                isBadgesOpen={isBadgesOpen}
                handleOpenModal={handleOpenModal}
                handleCloseModal={handleCloseModal}
                handleBadges={handleBadges}
            />
        </>
    )
}