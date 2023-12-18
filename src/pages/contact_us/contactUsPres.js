import { Container } from '@mui/system'
import { Footer } from '../../components/authfoot'
import { NavBar } from '../../components/authnav'
import { SideBarNav } from '../../components/helpers/sidebarnav'
import contactUs from '../../datastore/contactus'
import {
    BackgroundImageContainer,
    MainContentContainer,
    Paragraph,
    TextContentContainer,
    Title
} from './subcomponents.js/contactUsStyledComponents'


export const ContactUsPres = ({ isSidebarOpen }) => {
    return (
        <Container
            disableGutters={true}
            maxWidth='100%'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100%',
                width: '100%',
                overflow: 'hidden',
            }}
        >

            <NavBar />

            <MainContentContainer
                maxWidth='100%'
            >

                <BackgroundImageContainer />

                <TextContentContainer>
                    <Title
                        // variant='h5'
                        align='center'
                        noWrap
                    >
                        {contactUs.title}
                    </Title>
                    <Paragraph
                        // variant='body2'
                        align='center'
                    >
                        {contactUs.body}
                    </Paragraph>
                </TextContentContainer>

                {isSidebarOpen && (
                    <SideBarNav />
                )}

            </MainContentContainer>

            <Footer />

        </Container>
    )
}