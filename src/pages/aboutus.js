import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Footer } from '../components/authfoot'
import { NavBar } from '../components/authnav'
import aboutUs from '../datastore/aboutus'

export const AboutUs = () => {
    return (
        <Container
            maxWidth='100%'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
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
                    justifyContent: 'flex-start',
                    height: 'auto',
                    width: '100%',
                    paddingLeft: '0 !important',
                    paddingRight: '0 !important',
                }}
            >
                <Container
                    maxWidth='100%'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        gap: '8px',
                        width: '50%',
                        height: 'auto',
                        padding: '24px 16px !important',
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
                        variant='body2'
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
                        variant='body2'
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
                        variant='body2'
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
                        variant='body2'
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
                        variant='body2'
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

                        display: 'flex',
                        height: 'auto',
                        width: '50%',
                        backgroundImage: 'url(https://i.postimg.cc/wvjXZ8Tg/Basketball-Action-Shot.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'auto 100%',
                        backgroundPosition: 'center',
                    }}
                >
                </Container>
            </Container>
            <Footer />
        </Container>
    )
}
