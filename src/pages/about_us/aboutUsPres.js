import { Container } from '@mui/system'
import React from 'react'
import { Footer } from '../../components/authfoot'
import { NavBar } from '../../components/authnav'
import { SideBarNav } from '../../components/helpers/sidebarnav'
import aboutUs from '../../datastore/aboutus'
import {
    Title,
    Paragraph,
    EndingQuote,
    BackgroundImageContainer,
    TextContentContainer,
    MainContentContainer,
} from './subcomponents/aboutUsStyledComponents'

export const AboutUsPres = ({ isSidebarOpen }) => {

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

            <MainContentContainer
                disableGutters={true}
                maxWidth='100%'
                sx={{
                    overflow: isSidebarOpen ? 'hidden' : 'none',
                }}
            >
                <TextContentContainer
                    maxWidth='100%'
                >
                    <Title
                        variant='h4'
                        align='center'
                    >
                        {aboutUs.aboutUs.title}
                    </Title>
                    <Paragraph
                        variant='body2'
                        align='center'
                    >
                        {aboutUs.aboutUs.body}
                    </Paragraph>
                    <Title
                        variant='h4'
                        align='center'
                    >
                        {aboutUs.ourMission.title}
                    </Title>
                    <Paragraph
                        variant='body2'
                        align='center'
                    >
                        {aboutUs.ourMission.body}
                    </Paragraph>
                    <Title
                        variant='h4'
                        align='center'
                    >
                        {aboutUs.setsUsApart.title}
                    </Title>
                    <Paragraph
                        variant='body2'
                        align='center'
                    >
                        {aboutUs.setsUsApart.body}
                    </Paragraph>
                    <Title
                        variant='h4'
                        align='center'
                    >
                        {aboutUs.communityDriven.title}
                    </Title>
                    <Paragraph
                        variant='body2'
                        align='center'
                    >
                        {aboutUs.communityDriven.body}
                    </Paragraph>
                    <Title
                        variant='h4'
                        align='center'
                    >
                        {aboutUs.joinUsToday.title}
                    </Title>
                    <Paragraph
                        variant='body2'
                        align='center'
                    >
                        {aboutUs.joinUsToday.body}
                    </Paragraph>

                    <EndingQuote
                        variant='body2'
                        align='center'
                    >
                        {aboutUs.endingQuote.body}
                    </EndingQuote>
                </TextContentContainer>
                <BackgroundImageContainer
                    maxWidth='100%'
                >
                </BackgroundImageContainer>
                {isSidebarOpen && (
                    <SideBarNav />
                )}
            </MainContentContainer>

            <Footer />

        </Container>
    )
}