import { NavBar } from '../components/authnav'
import { Footer } from '../components/authfoot'
import { Container } from '@mui/material'

export const Forums = () => {
    return (
        <Container
            maxWidth='xlg'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100%',
                width: '100%',
                border: '1px dashed yellow',
            }}>
        >
            <NavBar />
            <Footer />
        </Container>
    )
}
