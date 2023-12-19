import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Avatar, Container, Typography } from "@mui/material";
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

export const ThirdGridItem = ({
    likeButton,
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    toggleLike
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
                        {
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
                            )}
                        <CommentsModal
                            open={isModalOpen !== null}
                            onClose={() => handleCloseModal()}
                            username={postContent[isModalOpen]?.username}
                            comment={postContent[isModalOpen]?.postText}
                        />
                    </ForumsYouFollowContent>
                </ForumsYouFollowMainContainer>
            </ForumsYouFollow>
        </>
    )
}