import { NavBar } from '../components/authnav'
import { Footer } from '../components/authfoot'
import { Container } from '@mui/system'

export const LiveScores = () => {
    return (
        <Container
            maxWidth='xlg'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100%',
                width: '100%',
                border: '1px dashed yellow',
                paddingLeft: '0 !important',
                paddingRight: '0 !important',
            }}
        >
            <NavBar />
            <Container
                sx={{
                    display: 'flex',
                    flex: '1',
                    justifyContent: 'center'
                }}
            >
                
            </Container>
            <Footer />
        </Container>
    )
}
