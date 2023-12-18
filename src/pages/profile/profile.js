import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/authSlice';
import { useSidebar } from '../../context/mobilenav';
import { ProfilePres } from './profilePres';


export const Profile = () => {

    const { user } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

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