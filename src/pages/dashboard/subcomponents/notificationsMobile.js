import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Container, IconButton, Typography } from "@mui/material";
import { fakeNotifications } from '../../../datastore/dashboard'
import { NotificationsMobileDisplayContainer } from "./dashboardStyledComponents";
import { mobileDisplay } from '../styles';


export const NotificationsMobileDisplay = ({ handleNotifications }) => {

    return (
        <>
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
        </>
    )
}