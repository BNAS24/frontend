import { NavBar } from '../components/authnav'
import { Footer } from '../components/authfoot'
import { Container, TextField } from '@mui/material'

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
                <TextField
                type='search'
                >

                </TextField>
            </Container>
            <Footer />
        </Container >
    )
}
