import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Avatar, Container, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { CommentsModal } from '../../../../components/modals/commentsModal';
import { ProfileModal } from '../../../../components/modals/profileModal';
import '../../../../styleSheets/dashboard.css';
import { formatPostTime } from '../../../../util/formatTime';
import { styles } from '../../styles';
import {
    ForumsYouFollow,
    ForumsYouFollowContent,
    ForumsYouFollowMainContainer,
    ForumsYouFollowNavBar,
    ForumsYouFollowTitle,
} from "../dashboardStyledComponents";

export const ThirdGridItem = ({
    user,
    isModalOpen,
    likeButton,
    handleOpenModal,
    handleCloseModal,
    toggleLike,
    forumContent,
    fetchUserProfile,
    profileModalState,
    openProfileModal,
    closeProfileModal,
    userProfileStats,
    followUser,
    unfollowUser,
    followState,
    setFollowState,
}) => {

    const handleUserProfileAndModal = (e) => {
        fetchUserProfile(e);
        openProfileModal();
    };

    return (
        <>
            <ForumsYouFollow
                container
                item
                xs={12} sm={12} md={12} lg={12}
            >
                <ForumsYouFollowMainContainer
                    disableGutters={true}
                >
                    <ForumsYouFollowNavBar
                        className='dashboard-forum-navbar'
                        id='dashboard-forum-navbar'
                    >
                        <ForumsYouFollowTitle
                            noWrap
                        >
                            <strong>
                                Forums you follow
                            </strong>
                        </ForumsYouFollowTitle>
                        <Link
                            to='/forums'
                            className='explore-button'
                        >
                            Explore
                        </Link>
                    </ForumsYouFollowNavBar>
                    <ForumsYouFollowContent
                        disableGutters={true}
                    >
                        {forumContent?.slice().reverse().map((post) => (
                            <Container
                                key={post._id} // Use a unique key for each item
                                sx={styles.forumsYouFollowContentContainer}
                            >
                                <Avatar
                                    alt='profile picture'
                                    variant='square'
                                    sx={styles.forumsYouFollowUserAvatar}
                                    src={post.author.profileImage ? `http://localhost:5000${post.author.profileImage}` : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'}
                                />
                                <Container
                                    sx={styles.forumsYouFollowPostContainer}
                                >
                                    <div
                                        className='post-header'
                                    >
                                        <Typography
                                            align='center'
                                            noWrap
                                            sx={styles.postUsernameTypography}
                                            className='links-hover-state'
                                            onClick={() => { handleUserProfileAndModal(post.author.username) }}
                                        >
                                            {post.author.username}
                                        </Typography>
                                        <Typography
                                            align='center'
                                            noWrap
                                            sx={styles.postTimeCreatedTypography}
                                        >
                                            {formatPostTime(post.createdAt)}
                                        </Typography>
                                    </div>
                                    <Container
                                        sx={styles.postContentContainer}>
                                        <Typography
                                            sx={styles.postContentText}>
                                            {post.content}
                                        </Typography>
                                    </Container>
                                    <div className='post-footer'>
                                        <Link to={`/forums/659c6ad9a19d13750e26a5ec/thread/${post.thread._id}`}>
                                            <Typography
                                                noWrap
                                                align='center'
                                                className='links-hover-state'
                                                sx={styles.forumLinkText}
                                            >
                                                {post.thread.title}
                                            </Typography>
                                        </Link>
                                        <div className='post-controls'>
                                            <AddCommentOutlinedIcon
                                                sx={styles.commentIcon}
                                                onClick={() => handleOpenModal(post._id)}
                                            />
                                            {likeButton[post._id] ? (
                                                <FavoriteOutlinedIcon
                                                    onClick={() => toggleLike(post._id)}
                                                    sx={styles.favoriteIconNormal}
                                                />
                                            ) : (
                                                <FavoriteBorderOutlinedIcon
                                                    onClick={() => toggleLike(post._id)}
                                                    sx={styles.favoriteIconClickedState}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </Container>
                            </Container>
                        ))}
                        <CommentsModal
                            user={user}
                            open={isModalOpen !== null}
                            onClose={() => handleCloseModal()}
                            username={forumContent.find(post => post._id === isModalOpen)?.author.username}
                            comment={forumContent.find(post => post._id === isModalOpen)?.content}
                            profileImage={forumContent.find(post => post._id === isModalOpen)?.author.profileImage}
                            followUser={() => followUser(forumContent.find(post => post._id === isModalOpen)?.author.username)}
                            unfollowUser={() => unfollowUser(forumContent.find(post => post._id === isModalOpen)?.author.username)}
                            followState={followState}
                            setFollowState={setFollowState}
                        />
                        <ProfileModal
                            user={user}
                            open={profileModalState}
                            closeProfileModal={closeProfileModal}
                            userProfileStats={userProfileStats}
                            followUser={() => followUser(userProfileStats?.username)}
                            unfollowUser={() => unfollowUser(userProfileStats?.username)}
                            followState={followState}
                            setFollowState={setFollowState}
                        />
                    </ForumsYouFollowContent>
                </ForumsYouFollowMainContainer>
            </ForumsYouFollow>
        </>
    )
}