import React from 'react'
import { NavBar } from '../components/authnav'
import { Footer } from '../components/authfoot'
import { Container } from '@mui/system'
import { Typography } from '@mui/material'

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
                    maxWidth='100%'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        gap: '16px',
                        padding: '16px 62px',
                        color: 'white',
                    }}
                >

                </Container>
                <Container
                    maxWidth='100%'
                    sx={{
                        color: 'white',
                        backgroundImage: 'url(https://i.postimg.cc/wvjXZ8Tg/Basketball-Action-Shot.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                <Typography></Typography>
                </Container>
            </Container>
            <Footer />
        </Container>
    )
}

