import React from 'react'
import { NavBar } from '../components/authnav'
import { Footer } from '../components/authfoot'
import { Container } from '@mui/system'

export const AboutUs = () => {
    return (
        <Container>
            <NavBar />
            <Container>
                Hello
            </Container>
            <Footer />
        </Container>
    )
}
