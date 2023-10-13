import React from 'react'
import { NavBar } from '../components/authnav'
import { Footer } from '../components/authfoot'
import { Container } from '@mui/system'
import { Typography } from '@mui/material'
import aboutUs from '../datastore/aboutus'

export const AboutUs = () => {
    return (
        <Container
            maxWidth='100%'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                minHeight: '100%',
                width: '100%',
                paddingLeft: '0 !important',
                paddingRight: '0 !important',
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
                    overflow: 'auto'
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
                    <Typography
                        variant='h4'
                        align='center'
                    >
                        {aboutUs.aboutUs.title}
                    </Typography>
                    <Typography
                        align='center'
                    >
                        {aboutUs.aboutUs.body}
                    </Typography>
                    <Typography
                        variant='h4'
                        align='center'
                    >
                        {aboutUs.ourMission.title}
                    </Typography>
                    <Typography
                        align='center'
                    >
                        {aboutUs.ourMission.body}
                    </Typography>
                    <Typography
                        variant='h4'
                        align='center'
                    >
                        {aboutUs.setsUsApart.title}
                    </Typography>
                    <Typography
                        align='center'
                    >
                        {aboutUs.setsUsApart.body}
                    </Typography>
                    <Typography
                        variant='h4'
                        align='center'
                    >
                        {aboutUs.communityDriven.title}
                    </Typography>
                    <Typography
                        align='center'
                    >
                        {aboutUs.communityDriven.body}
                    </Typography>
                    <Typography
                        variant='h4'
                        align='center'
                    >
                        {aboutUs.joinUsToday.title}
                    </Typography>
                    <Typography
                        align='center'
                    >
                        {aboutUs.joinUsToday.body}
                    </Typography>

                    <Typography
                        variant='body2'
                        align='center'
                        sx={{
                            color: 'var(--theme-orange)',
                            fontWeight: 700
                        }}
                    >
                        {aboutUs.endingQuote.body}
                    </Typography>
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

                </Container>
            </Container>
            <Footer />
        </Container>
    )
}
