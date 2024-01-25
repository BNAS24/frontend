import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SubForumPageContainer } from "./forumSubRoutePres";

export const SubForumPage = () => {

    const storedUserData = localStorage.getItem('user');
    
    const user = storedUserData ? JSON.parse(storedUserData) : null;

    const getParams = useParams();

    const [forumData, setForumData] = useState();

    const [likeButton, setLikeButtons] = useState({});

    const [isModalOpen, setModalOpen] = useState(null);

    const [postModalState, setPostModalState] = useState(false);

    const [profileModalState, setProfileModalState] = useState(false);

    const [userProfileStats, setUserProfileStats] = useState(null);

    const [followState, setFollowState] = useState(false);

    const [postData, setPostData] = useState({
        author: user ? user._id : null,
        content: '',
    });

    useEffect(() => {
        let isMounted = true;
    
        const fetchForumsData = async () => {

            try {

                const response = await fetch(`http://localhost:5000/api/forums/thread/allPosts/${getParams.id}`);
    
                if (!response.ok) {
                    console.log('Error fetching data:', response.statusText);
                }
    
                const data = await response.json();
    
                if (isMounted) {
                    setForumData(data);
                }

            } catch (error) {
                console.error(error);
            }
        };
    
        if (!forumData) {
            fetchForumsData();
        }
    
        return () => {
            isMounted = false;
        };
    }, [forumData, getParams]);
    

    const createPost = async () => {

        try {

            const threadId = getParams.id;

            const response = await fetch(`http://localhost:5000/api/forums/thread/createPost/${threadId}`, {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),

            });

            if (response.ok) {

                console.log('Post created successfully!');

                setPostData({
                    authorName: '',
                    content: '',
                });

            } else {

                console.error('Failed to create post:', response.statusText);

            }

        } catch (error) {
            console.log(error);
        }
    };

    const toggleLike = (postKey) => {
        setLikeButtons((prevLikeButtons) => ({
            ...prevLikeButtons,
            [postKey]: !prevLikeButtons[postKey],
        }));
    };

    const handleOpenModal = (postKey) => {
        setModalOpen(postKey)
    };

    const handleCloseModal = () => {
        setModalOpen(null)
    };

    const openPostModal = () => {
        setPostModalState(true);
    }

    const closePostModal = (e) => {
        e.preventDefault()
        setPostModalState(false);
    }

    const onPostChange = (e) => {
        setPostData((prevState) => ({
            ...prevState,
            content: e.target.value,
        }))
    }

    const openProfileModal = () => {
        setProfileModalState(true);
    };

    const closeProfileModal = (e) => {
        if (e) {
            e.preventDefault();
        }
        setProfileModalState(false);
    };

    const fetchUserProfile = async (userClickedOn) => {
        try {

            const response = await fetch(`http://localhost:5000/api/users/userStats/${userClickedOn}`);

            if (!response.ok) {

                console.log(`Error fetching user profile for ${userClickedOn}:`, response.statusText);

            } else {

                const userStats = await response.json();
                setUserProfileStats(userStats);

            }

        } catch (error) {
            console.log(error);
        }
    };

    const followUser = async (username) => {
        try {

            const response = await fetch(`http://localhost:5000/api/users/follow/${username}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user?.token}`
                },
            });

            if (!response.ok) {

                console.log(`Error following user: ${username}`);

            } else {

                const result = await response.json();
                console.log(result);
                setFollowState(true);
            }

        } catch (error) {
            console.log(error);
        }
    };

    const unfollowUser = async (username) => {
        try {

            const response = await fetch(`http://localhost:5000/api/users/unfollow/${username}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user?.token}`
                },
            });

            if (!response.ok) {

                console.log(`Error unfollowing user: ${username}`);

            } else {

                const result = await response.json();
                console.log(result);
                setFollowState(false);
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (

        <SubForumPageContainer
            user={user}
            forumData={forumData}
            fetchUserProfile={fetchUserProfile}
            userProfileStats={userProfileStats}

            // Profile Modal
            profileModalState={profileModalState}
            openProfileModal={openProfileModal}
            closeProfileModal={closeProfileModal}
            followUser={followUser}
            unfollowUser={unfollowUser}
            followState={followState}
            setFollowState={setFollowState}

            // Create Post Modal
            postModalState={postModalState}
            openPostModal={openPostModal}
            closePostModal={closePostModal}
            createPost={createPost}
            onPostChange={onPostChange}

            // Comments Modal
            isModalOpen={isModalOpen}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
            likeButton={likeButton}
            toggleLike={toggleLike}
        />
    )
};