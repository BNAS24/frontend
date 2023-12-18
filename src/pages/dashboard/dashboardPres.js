import { ThemeProvider } from '@emotion/react';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Avatar, Container, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/authfoot';
import { NavBar } from '../../components/authnav';
import { CommentsModal } from '../../components/commentmd';
import { SideBarNav } from '../../components/helpers/sidebarnav';
import { useSidebar } from '../../context/mobilenav';
import { fakeNotifications, fakeTeams, postContent } from '../../datastore/dashboard';
import customTheme from '../../context/muiTheme/customtheme';
import '../../styles/dashboard.css';
import { mobileDisplay, styles } from './styles';
import {
    DashboardContainer,
    DashboardHeadGrid,
    DashboardHeadXS,
    FavoriteTeamInnerContainer,
    FavoriteTeamsContainerXS,
    FavoriteTeamsMainContainer,
    FavoriteTeamsMobileDisplayContainer,
    FavoriteTeamsTitle,
    ForumsYouFollow,
    ForumsYouFollowContent,
    ForumsYouFollowMainContainer,
    ForumsYouFollowNavBar,
    ForumsYouFollowTitle,
    Greeting,
    GreetingXS,
    MainLayoutGrid,
    NotificationsContainer,
    NotificationsInnerContainer,
    NotificationsMobileDisplayContainer,
    NotificationsfTitle,
    UserAvatar,
    UserData,
    UserDataContainer
} from './subcomponents/dashboardStyledComponents';

export const DashboardPres = ({
    user,
    likeButton,
    toggleLike,
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    isTeamsDisplayed,
    handleTeamsDisplayed,
    isNotificationsDisplayed,
    handleNotifications,
}) => {

    const { isSidebarOpen } = useSidebar();

    return (
        <>
            <ThemeProvider theme={customTheme}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        minHeight: '100%',
                        width: '100%'
                    }}
                >
                    <NavBar />

                    {/*Main content is below this line*/}

                    <MainLayoutGrid
                        container
                    >

                        {/*1st Grid Item*/}

                        <DashboardHeadGrid
                            item
                            xs={12} sm={12} md={12} lg={12}>
                            <DashboardContainer
                                disableGutters={true}
                            >
                                <UserAvatar
                                    variant='square'
                                    alt='profile picture'
                                    src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
                                />
                                <Greeting>
                                    Hello {user && user.username}!
                                </Greeting>
                            </DashboardContainer>
                        </DashboardHeadGrid>

                        {/*Displays only on xs sreens only*/}

                        <DashboardHeadXS
                            item
                            maxWidth="xs"
                        >
                            <GreetingXS>
                                Hello {user && user.username}!
                            </GreetingXS>
                        </DashboardHeadXS>

                        {/*2nd Grid Item*/}

                        <UserData
                            item
                            xs={12} sm={12} md={12} lg={12}
                        >
                            <UserDataContainer
                                disableGutters={true}
                            >

                                {/*First Container*/}

                                <FavoriteTeamsMainContainer
                                    disableGutters={true}
                                >
                                    <FavoriteTeamsTitle
                                        noWrap={true}
                                        align='center'
                                        variant='h4'
                                    >
                                        Favorite Teams
                                    </FavoriteTeamsTitle>

                                    <FavoriteTeamInnerContainer
                                        disableGutters={true}
                                    >
                                        {fakeTeams.map((team) =>
                                            <Container
                                                key={team}
                                                sx={styles.fakeTeamsContainer}
                                            >
                                                <Box
                                                    component='img'
                                                    variant='square'
                                                    alt='team logo'
                                                    src='https://cdn-icons-png.flaticon.com/512/2553/2553695.png'
                                                    sx={styles.fakeTeamsLogoPlaceHolder}
                                                />
                                                <Typography
                                                    variant='body1'
                                                    align='center'
                                                    className='links-hover-state'
                                                    sx={styles.fakeTeamsTitle}
                                                >
                                                    {team}
                                                </Typography>
                                            </Container>
                                        )}

                                    </FavoriteTeamInnerContainer>
                                </FavoriteTeamsMainContainer>

                                {/*Displays on extra small screens only*/}

                                <FavoriteTeamsContainerXS>
                                    <Box
                                        component='img'
                                        className='side-controls'
                                        onClick={handleNotifications}
                                        src='https://i.postimg.cc/d0s4fX3v/Notifications.png'
                                        alt='notifications icon'
                                        sx={styles.notificationsButtonIcon}
                                    />
                                    <Box
                                        component='img'
                                        className='side-controls'
                                        onClick={handleTeamsDisplayed}
                                        src='https://i.postimg.cc/0QvrZCrT/Favorite-Teams.png'
                                        alt='badges icon'
                                        sx={styles.badgesButtonIcon}
                                    />
                                </FavoriteTeamsContainerXS>

                                {/*Second Container*/}

                                <NotificationsContainer
                                    disableGutters={true}
                                >
                                    <NotificationsfTitle
                                        noWrap={true}
                                        align='center'
                                        variant='h4'
                                    >
                                        Notifications
                                    </NotificationsfTitle>
                                    <NotificationsInnerContainer>

                                        {/*
                                    The Typography element 
                                    will actually get changed 
                                    into a NavLink component 
                                    for demonstration purposes
                                    of clicking on a notification 
                                    and it takes you to someone's 
                                    profile page, you have to build 
                                    a mock profile page first
                                    */}

                                        {fakeNotifications.map((notification) =>
                                            <Typography
                                                key={notification}
                                                variant='body1'
                                                align='center'
                                                className='links-hover-state'
                                                sx={styles.notificationLink}
                                            >
                                                {notification} liked your post
                                            </Typography>
                                        )}
                                    </NotificationsInnerContainer>
                                </NotificationsContainer>
                            </UserDataContainer>
                        </UserData>

                        {/*3rd Grid Item*/}

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

                        {isSidebarOpen ? <SideBarNav /> : null}

                        {/*Displayed on smaller screens */}

                        {isTeamsDisplayed && (
                            <>
                                <FavoriteTeamsMobileDisplayContainer>
                                    <IconButton
                                        onClick={handleTeamsDisplayed}
                                        sx={mobileDisplay.favoriteTeams.button}
                                    >
                                        <ArrowBackIosNewOutlinedIcon
                                            sx={mobileDisplay.favoriteTeams.buttonColor}
                                        />
                                    </IconButton>
                                    <Typography
                                        align='center'
                                        sx={mobileDisplay.favoriteTeams.title}
                                    >
                                        Favorite Teams
                                    </Typography>
                                    <Container
                                        sx={mobileDisplay.favoriteTeams.container}
                                    >
                                        {fakeTeams.map((team) =>
                                            <Container
                                                key={team}
                                                sx={mobileDisplay.favoriteTeams.innerContainer}
                                            >
                                                <Avatar
                                                    variant='square'
                                                    alt='team logo'
                                                    src='https://cdn-icons-png.flaticon.com/512/2553/2553695.png'
                                                    sx={mobileDisplay.favoriteTeams.image}
                                                >
                                                </Avatar>
                                                <Typography
                                                    variant='body1'
                                                    align='center'
                                                    className='links-hover-state'
                                                    sx={mobileDisplay.favoriteTeams.name}
                                                >
                                                    {team}
                                                </Typography>
                                            </Container>
                                        )}

                                    </Container>
                                </FavoriteTeamsMobileDisplayContainer>
                            </>
                        )}
                        {isNotificationsDisplayed ? (
                            <NotificationsMobileDisplayContainer>
                                <IconButton
                                    onClick={handleNotifications}
                                    sx={mobileDisplay.notifications.button}
                                >
                                    <ArrowBackIosNewOutlinedIcon
                                        sx={mobileDisplay.notifications.buttonColor}
                                    />
                                </IconButton>
                                <Typography
                                    align='center'
                                    sx={mobileDisplay.notifications.title}
                                >
                                    Notifications
                                </Typography>
                                <Container
                                    sx={mobileDisplay.notifications.container}
                                >

                                    {/*
                                The Typography element will actually get changed
                                into a NavLink component for demonstration purposes
                                of clicking on a notification and it takes you to 
                                someone's profile page, you have to build a mock 
                                profile page first
                                */}

                                    {fakeNotifications.map((notification) =>
                                        <Typography
                                            key={notification}
                                            variant='body1'
                                            align='center'
                                            className='links-hover-state'
                                            sx={mobileDisplay.notifications.link}
                                        >
                                            {notification} liked your post
                                        </Typography>
                                    )}
                                </Container>
                            </NotificationsMobileDisplayContainer>
                        ) : null}
                    </MainLayoutGrid>

                    {/*Footer Component*/}

                    <Footer />
                </Box>
            </ThemeProvider>
        </>
    )
}