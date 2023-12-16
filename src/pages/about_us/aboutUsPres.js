import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Footer } from '../../components/authfoot'
import { NavBar } from '../../components/authnav'
import { SideBarNav } from '../../components/helpers/sidebarnav'
import aboutUs from '../../datastore/aboutus'

export const AboutUsPres = ({isSidebarOpen}) => {

    return (
        <Container
        disableGutters={true}
        maxWidth='100%'
        sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
        }}
    >
        <NavBar />
        <Container
            disableGutters={true}
            maxWidth='100%'
            sx={{
                position: 'relative',
                flex: '1',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                height: 'auto',
                width: '100%',
                overflow: isSidebarOpen ? 'hidden' : 'none',
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
                    p: '24px 16px !important',
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
                    backgroundSize: {
                        xs: 'auto 100%',
                        sm: 'auto 100%',
                        md: 'cover',
                        lg: 'cover'
                    },
                    backgroundPosition: 'center',
                }}
            >
            </Container>
            {isSidebarOpen && (
                <SideBarNav />
            )}
        </Container>
        <Footer />
    </Container>
    )
}