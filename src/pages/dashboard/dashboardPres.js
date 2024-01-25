import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/system';
import { Footer } from '../../components/authfoot';
import { NavBar } from '../../components/authnav';
import { SideBarNav } from '../../components/helpers/sidebarnav';
import { useSidebar } from '../../context/mobilenav';
import customTheme from '../../context/muiTheme/customtheme';
import '../../styleSheets/dashboard.css';
import {
    DashboardHeadXS,
    GreetingXS,
    MainLayoutGrid
} from './subcomponents/dashboardStyledComponents';
import { FavoriteTeamsMobileDisplay } from './subcomponents/favoriteTeamsMobile';
import { NotificationsMobileDisplay } from './subcomponents/notificationsMobile';
import { FirstGridItem } from './subcomponents/sections/gridItem1';
import { SecondGridItem } from './subcomponents/sections/gridItem2';
import { ThirdGridItem } from './subcomponents/sections/gridItem3';

export const DashboardPres = ({
    user,
    extraUserData,
    socket,
    likeButton,
    toggleLike,
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    isTeamsDisplayed,
    handleTeamsDisplayed,
    isNotificationsDisplayed,
    handleNotifications,
    forumContent,
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

                        <FirstGridItem
                            user={user}
                            extraUserData={extraUserData}
                        >

                        </FirstGridItem>

                        {/*Displays only on xs sreens only*/}

                        <DashboardHeadXS
                            item
                            maxWidth="xs"
                        >
                            <GreetingXS>
                                Hello {user && user.username}!
                            </GreetingXS>
                        </DashboardHeadXS>

                        <SecondGridItem
                            handleNotifications={handleNotifications}
                            handleTeamsDisplayed={handleTeamsDisplayed}
                        >

                        </SecondGridItem>

                        <ThirdGridItem
                            socket={socket}
                            likeButton={likeButton}
                            isModalOpen={isModalOpen}
                            handleOpenModal={handleOpenModal}
                            handleCloseModal={handleCloseModal}
                            toggleLike={toggleLike}
                            forumContent={forumContent}
                        >

                        </ThirdGridItem>

                        {isSidebarOpen ? <SideBarNav /> : null}

                        {/*Displayed on smaller screens */}

                        {isTeamsDisplayed ? <FavoriteTeamsMobileDisplay handleTeamsDisplayed={handleTeamsDisplayed} /> : null}

                        {isNotificationsDisplayed ? <NotificationsMobileDisplay handleNotifications={handleNotifications} /> : null}

                    </MainLayoutGrid>

                    {/*Footer Component*/}

                    <Footer />

                </Box>
            </ThemeProvider>
        </>
    )
}