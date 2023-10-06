import '../styles/profile.css'
import { Box } from '@mui/system';
import { NavBar } from "../components/authnav"
import { Footer } from '../components/authfoot';
import { Grid } from '@mui/material';

export const Profile = () => {
    return (
        <Box>
            <NavBar />
<Grid>Hello World</Grid>
            <Footer />
        </Box>
    )
}