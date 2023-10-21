import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Footer } from '../components/authfoot'
import { NavBar } from '../components/authnav'
import contactUs from '../datastore/contactus'

export const ContactUS = () => {
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
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: '40px',
                    height: '100%',
                    width: '100%',
                    paddingLeft: '0 !important',
                    paddingRight: '0 !important'
                }}
            >
                <Container
                    sx={{
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
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '50%',
                        gap: '16px',
                        padding: '16px 62px',
                        color: 'white',
                    }}
                >
                    <Typography
                        variant='h5'
                        align='center'
                    >
                        {contactUs.title}
                    </Typography>
                    <Typography
                        variant='body2'
                        align='center'
                    >
                        {contactUs.body}
                    </Typography>
                </Container>
            </Container>
            <Footer />
        </Container>
    )
}

