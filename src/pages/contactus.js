import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Footer } from '../components/authfoot'
import { NavBar } from '../components/authnav'
import contactUs from '../datastore/contactus'
import { useSidebar } from '../context/mobilenav';
import { SideBarNav } from '../components/helpers/sidebarnav';

export const ContactUS = () => {

    const { isSidebarOpen } = useSidebar();
    
    return (
        <Container
            maxWidth='100%'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100%',
                width: '100%',
                paddingLeft: '0 !important',
                paddingRight: '0 !important',
                overflow: 'hidden',
            }}
        >
            <NavBar />
            <Container
                maxWidth='100%'
                sx={{
                    position: 'relative',
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: '16px',
                    height: '100%',
                    width: '100%',
                    paddingLeft: '0 !important',
                    paddingRight: '16px !important'
                }}
            >
                <Container
                    sx={{
                        flex: '1',
                        width: '50%',
                        color: 'white',
                        backgroundImage: 'url(https://i.postimg.cc/WpCGbLhy/Hockey-Shot.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                </Container>
                <Container
                    sx={{
                        flex: '1',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '50%',
                        gap: '16px',
                        color: 'white',
                    }}
                >
                    <Typography
                        // variant='h5'
                        align='center'
                        noWrap
                        sx={{
                            fontSize: {
                                xs: '1.5rem',
                                sm: '2.5rem',
                                md: '3rem',
                                lg: '3rem',

                                },
                        }}
                    >
                        {contactUs.title}
                    </Typography>
                    <Typography
                        // variant='body2'
                        align='center'
                        sx={{
                            fontSize: {
                                xs: '0.6rem',
                                sm: '1rem',
                                md: '1.2rem',
                                lg: '1.3rem',

                                },
                        }}
                    >
                        {contactUs.body}
                    </Typography>
                </Container>
                {isSidebarOpen  && (
                    <SideBarNav />
                )}
            </Container>
            <Footer />
        </Container>
    )
}

