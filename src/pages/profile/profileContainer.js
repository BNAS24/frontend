import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/authSlice';
import { useSidebar } from '../../context/mobilenav';
import { ProfilePres } from './profilePres';


export const Profile = () => {

    const { user, isLoading } = useAuth();

    const navigate = useNavigate();

    const [checkedUserStatus, setCheckedUserStatus] = useState(false);


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

    const { isSidebarOpen } = useSidebar();

    const [isModalOpen, setModalOpen] = useState(null);

    const [isBadgesOpen, setBadgesOpen] = useState(false);

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