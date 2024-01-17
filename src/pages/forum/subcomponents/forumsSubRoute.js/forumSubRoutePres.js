import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Footer } from "../../../../components/authfoot"
import { NavBar } from "../../../../components/authnav"
import '../../../../styleSheets/dashboard.css';
import { styles } from '../../../../pages/dashboard/styles'
import {
    ForumContent,
    ForumDataDisplay,
    ForumPageWrap,
    TopContainer,
} from "../forumsStyledComponents"
import { Avatar, Button, Typography, Container } from "@mui/material";
import { formatPostTime } from '../../../../helpers/formatTime';
import { CommentsModal } from '../../../../components/commentmd';
import { CreatePostModal } from '../../../../components/createpostmd';


export const SubForumPageContainer = ({
    forumData,
    postModalState,
    openPostModal,
    closePostModal,
    createPost,
    onPostChange,
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    toggleLike,
    likeButton,
}) => {


    return (
        <ForumPageWrap
            disableGutters={true}
            maxWidth='xl'
        >
            <NavBar />
            <ForumContent
                disableGutters={true}
            >
                <ForumDataDisplay
                    maxWidth='xl'
                    disableGutters={true}
                >
                    <TopContainer
                        maxWidth='xl'
                    >
                        {/*Forum Picture*/}
                        <Container
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '8px',
                                width: 'auto',
                                alignItems: 'center'
                            }}
                        >
                            <Avatar
                                alt='Forum Image'
                                variant='square'
                                sx={{
                                    height: {
                                        xs: '16px',
                                        sm: '64px',
                                        md: '64px',
                                        lg: '64px',
                                    },
                                    width: {
                                        xs: '16px',
                                        sm: '64px',
                                        md: '64px',
                                        lg: '64px',
                                    }
                                }}
                            />
                            <Button
                                variant='text'
                                disableRipple
                                sx={{
                                    color: 'white',
                                }}
                            >
                                Follow
                            </Button>
                        </Container>

                        {/*Forums Name*/}

                        <Typography
                            align='center'
                            variant='h3'
                            sx={{
                                flex: '1',
                                fontSize: {
                                    xs: '0.6rem',
                                    sm: '1rem',
                                    md: '1rem',
                                    lg: '1rem',
                                }
                            }}
                        >
                            {forumData ? (
                                <Typography>
                                    {forumData[0].thread.title}
                                </Typography>
                            ) : null}
                        </Typography>
                        {/*Button To Create a Post*/}
                        <Button
                            variant='text'
                            onClick={openPostModal}
                            sx={{
                                color: 'var(--theme-orange)'
                            }}
                        >
                            Create Post
                        </Button>
                    </TopContainer>
                    <Container
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            flexGrow: 1,
                            flexShrink: 0,
                            gap: '16px',
                            width: '80%',
                            height: '100%',
                            mt: {
                                xs: '32px',
                                sm: '32px',
                                md: '40px',
                                lg: '64px'
                            },
                        }}
                    >
                        {forumData?.slice().reverse().map((post) => (
                            <Container
                                key={post._id}
                                // sx={styles.forumsYouFollowContentContainer}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    gap: {
                                        xs: '8px',
                                        sm: '8px',
                                        md: '16px',
                                        lg: '16px'
                                    },
                                    p: {
                                        xs: '0 8px',
                                        sm: '0 8px',
                                        md: '0 16px',
                                        lg: '0 16px'
                                    },
                                }}
                            >
                                <Avatar
                                    alt='profile picture'
                                    variant='square'
                                    // sx={styles.forumsYouFollowUserAvatar}
                                    sx={{
                                        height: {
                                            xs: '16px',
                                            sm: '64px',
                                            md: '64px',
                                            lg: '64px',
                                        },
                                        width: {
                                            xs: '16px',
                                            sm: '64px',
                                            md: '64px',
                                            lg: '64px',
                                        }
                                    }}
                                />
                                <Container
                                    // sx={styles.forumsYouFollowPostContainer}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        alignItems: 'start',
                                        gap: '8px',
                                        height: {
                                            xs: '140px',
                                            sm: '168px',
                                            md: '168px',
                                            lg: '168px'
                                        },
                                        p: '8px',
                                        backgroundColor: 'var(--theme-blue)'
                                    }}
                                >
                                    <div className='post-header'>
                                        <Typography
                                            align='center'
                                            noWrap
                                        // sx={styles.postUsernameTypography}
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
                                        sx={styles.postContentContainer}
                                    >
                                        <Typography
                                        // sx={styles.postContentText}
                                        >
                                            {post.content}
                                        </Typography>
                                    </Container>
                                    <div
                                        // className='post-footer'
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                            width: '100%',
                                        }}
                                    >
                                        <div
                                            className='post-controls'>
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
                            username={forumData?.find(post => post._id === isModalOpen)?.author.username}
                            comment={forumData?.find(post => post._id === isModalOpen)?.content}
                        />
                    </Container>
                </ForumDataDisplay>
            </ForumContent>
            <CreatePostModal
                open={postModalState}
                createPost={createPost}
                closePostModal={(e) => closePostModal(e)}
                onPostChange={onPostChange}
            />
            <Footer />
        </ForumPageWrap>
    )
}