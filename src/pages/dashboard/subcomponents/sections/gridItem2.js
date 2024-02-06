import { Container, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { styles } from '../../styles'
import '../../../../styleSheets/dashboard.css'
import { Link } from "react-router-dom"

import {
    UserData,
    UserDataContainer,
    FavoriteTeamInnerContainer,
    FavoriteTeamsMainContainer,
    FavoriteTeamsTitle,
    FavoriteTeamsContainerXS,
    NotificationsContainer,
    NotificationsfTitle,
    NotificationsInnerContainer
} from "../dashboardStyledComponents"

export const SecondGridItem = ({
    favoriteTeams,
    handleNotifications,
    handleTeamsDisplayed,
    extraUserData,
}) => {

    return (
        <>
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
                            {favoriteTeams.length > 0 ? favoriteTeams.map((team) =>
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
                            ) :
                                <Container
                                    sx={{
                                        display: 'flex',
                                        height: '100%',
                                        width: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Typography
                                        align='center'
                                        variant='h5'
                                    >
                                        No Teams Favorited
                                    </Typography>
                                </Container>
                            }

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
                            alt='favorite teams icon'
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

                            {extraUserData?.notifications.slice().reverse().map((notification) =>
                                <Link
                                    key={notification._id}
                                    to={`/forums/${notification.forumId}/thread/${notification.threadId}`}>
                                    <Typography

                                        variant='body1'
                                        align='center'
                                        className='links-hover-state'
                                        sx={styles.notificationLink}
                                    >
                                        {notification.content}
                                    </Typography>
                                </Link>
                            )}


                        </NotificationsInnerContainer>
                    </NotificationsContainer>
                </UserDataContainer>
            </UserData>
        </>
    )
}