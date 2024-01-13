import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Avatar, Container, Typography, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import { CommentsModal } from '../../../../components/commentmd';
import { postContent } from '../../../../datastore/dashboard';
import '../../../../styleSheets/dashboard.css';
import { styles } from '../../styles';
import {
    ForumsYouFollow,
    ForumsYouFollowContent,
    ForumsYouFollowMainContainer,
    ForumsYouFollowNavBar,
    ForumsYouFollowTitle,
} from "../dashboardStyledComponents";
import { formatPostTime } from '../../../../helpers/formatTime';

export const ThirdGridItem = ({
    socket,
    likeButton,
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    toggleLike,
    forumContent,
}) => {

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
                        {/* {
                            Object.keys(postContent).map((key) =>
                                <Container
                                    key={key}
                                    sx={styles.forumsYouFollowContentContainer}
                                >
                                    <Avatar
                                        key={key}
                                        alt='profile picture'
                                        variant='square'
                                        sx={styles.forumsYouFollowUserAvatar}
                                    >
                                    </Avatar>
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
                                            >
                                                {postContent[key].username}
                                            </Typography>
                                            <Typography
                                                align='center'
                                                noWrap
                                                sx={styles.postTimeCreatedTypography}
                                            >
                                                {postContent[key].timeCreated}
                                            </Typography>
                                        </div>
                                        <Container
                                            sx={styles.postContentContainer}
                                        >
                                            <Typography
                                                sx={styles.postContentText}
                                            >
                                                {postContent[key].postText}
                                            </Typography>
                                        </Container>
                                        <div
                                            className='post-footer'
                                        >
                                            <Link
                                                to={postContent[key].forumLink}
                                            >
                                                <Typography
                                                    noWrap
                                                    align='center'
                                                    className='links-hover-state'
                                                    sx={styles.forumLinkText}
                                                >
                                                    Forum Name
                                                </Typography>
                                            </Link>
                                            <div
                                                className='post-controls'
                                            >
                                                <AddCommentOutlinedIcon
                                                    key={key}
                                                    sx={styles.commentIcon}
                                                    onClick={() => handleOpenModal(key)}
                                                />
                                                {likeButton[key] ? (
                                                    <FavoriteOutlinedIcon
                                                        onClick={() => toggleLike(key)}
                                                        sx={styles.favoriteIconNormal}
                                                    />) : (<FavoriteBorderOutlinedIcon
                                                        onClick={() => toggleLike(key)}
                                                        sx={styles.favoriteIconClickedState}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </Container>
                                </Container>
                            )} */}
                        {forumContent.map((post) => (
                            <Container
                                key={post._id} // Use a unique key for each item
                                sx={styles.forumsYouFollowContentContainer}
                            >
                                <Avatar
                                    alt='profile picture'
                                    variant='square'
                                    sx={styles.forumsYouFollowUserAvatar}
                                />
                                <Container
                                    sx={styles.forumsYouFollowPostContainer}
                                >
                                    <div className='post-header'>
                                        <Typography
                                            align='center'
                                            noWrap
                                            sx={styles.postUsernameTypography}
                                        >
                                            {post.author.username}
                                        </Typography>
                                        <Typography
                                            align='center'
                                            noWrap
                                            sx={styles.postTimeCreatedTypography}
                                        >
                                            {formatPostTime(post.createdAt)} {/* Replace with the actual time */}
                                        </Typography>
                                    </div>
                                    <Container sx={styles.postContentContainer}>
                                        <Typography sx={styles.postContentText}>
                                            {post.content}
                                        </Typography>
                                    </Container>
                                    <div className='post-footer'>
                                        <Link to={`/forums/${post.thread._id}`}>
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
                            open={isModalOpen !== null}
                            onClose={() => handleCloseModal()}
                            username={forumContent.find(post => post._id === isModalOpen)?.author.username}
                            comment={forumContent.find(post => post._id === isModalOpen)?.content}
                        />
                    </ForumsYouFollowContent>
                </ForumsYouFollowMainContainer>
            </ForumsYouFollow>
        </>
    )
}