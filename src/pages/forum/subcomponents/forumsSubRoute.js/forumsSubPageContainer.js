import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { SubForumPageContainer } from "./forumSubRoutePres"

export const SubForumPage = () => {

    const getParams = useParams()

    const [forumData, setForumData] = useState()

    const [likeButton, setLikeButtons] = useState({});
    const [isModalOpen, setModalOpen] = useState(null);

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

    // console.log('Forum data fetched:', forumData)
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


    return (

        <SubForumPageContainer
            params={getParams}
            forumData={forumData}
            isModalOpen={isModalOpen}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
            likeButton={likeButton}
            toggleLike={toggleLike}

        />
    )
}