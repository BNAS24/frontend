import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';
import { SubForumPageContainer } from "./forumSubRoutePres";

export const SubForumPage = () => {

    const storedUserData = localStorage.getItem('user');
    const user = storedUserData ? JSON.parse(storedUserData) : null;

    const getParams = useParams();

    // const navigate = useNavigate();

    const [forumData, setForumData] = useState();

    const [likeButton, setLikeButtons] = useState({});

    const [isModalOpen, setModalOpen] = useState(null);

    const [postModalState, setPostModalState] = useState(false);

    // const [checkedUserStatus, setCheckedUserStatus] = useState(false);

    const [postData, setPostData] = useState({
        author: user ? user._id : null,
        content: '',
    });

    // useEffect(() => {
    //     if (isLoading) {
    //         return;
    //     }

    //     if (!user) {

    //         if (!checkedUserStatus) {
    //             setCheckedUserStatus(true);
    //             return;
    //         }

    //         navigate('/login');
    //     }
    // }, [checkedUserStatus, navigate])

    useEffect(() => {

        const fetchForumsData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/forums/thread/allPosts/${getParams.id}`)

                if (!response.ok) {
                    console.log('Error fetching data:', response.statusText)
                }

                const data = await response.json()

                setForumData(data)

            } catch (error) {
                console.error(error)
            }
        }

        if (!forumData) {
            fetchForumsData();
        }
    }, [forumData, getParams])

    const createPost = async (threadId) => {

        try {

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
        // socket.emit('liked', { message: 'Your post was liked!' })
    };

    const handleOpenModal = (postKey) => {
        setModalOpen(postKey)
    };

    const handleCloseModal = () => {
        setModalOpen(null)
    };

    const openPostModal = () => setPostModalState(true);
    const closePostModal = () => setPostModalState(false);  

    return (

        <SubForumPageContainer
            forumData={forumData}

            // Create Post Modal
            postModalState={postModalState}
            openPostModal={openPostModal}
            closePostModal={closePostModal}
            createPost={createPost}
            setPostData={setPostData}

            // Comments Modal
            isModalOpen={isModalOpen}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
            likeButton={likeButton}
            toggleLike={toggleLike}
        />
    )
}