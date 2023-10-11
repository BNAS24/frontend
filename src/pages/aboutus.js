import React from 'react'
import { NavBar } from '../components/authnav'
import { Footer } from '../components/authfoot'
import { Container } from '@mui/system'
import { aboutUs } from '../datastore/aboutus'

export const AboutUs = () => {
    return (
        <Container
            maxWidth='100%'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100%',
                width: '100%',
                border: '1px dashed yellow',
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
                    paddingRight: '0 !important',
                    border: 'solid 1px red'
                }}
            >
                <Container
                maxWidth='100%'
                    sx={{
                        color: 'white',
                        border: 'dashed 1px yellow'
                    }}
                >
                    1
                </Container>
                <Container
                maxWidth='100%'
                    sx={{
                        color: 'white',
                        border: 'dashed 1px yellow',
                        backgroundImage: 'url(https://i.postimg.cc/wvjXZ8Tg/Basketball-Action-Shot.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                    }}
                >
                    2
                </Container>
            </Container>
            <Footer />
        </Container>
    )
}
