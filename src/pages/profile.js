import '../styles/profile.css'
import { NavBar } from "../components/authnav"
import { Footer } from '../components/authfoot';
import { Grid } from '@mui/material';
import { Box} from '@mui/system';

export const Profile = () => {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100%',
                width: '100%',
                border: 'dashed 1px yellow'
            }}>
            <NavBar />
            <Grid
                container
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gridTemplateRows: '1fr 5fr',
                    gridGap: '8px',
                    columnGap: '56px',
                    padding: '24px 24px',
                    flex: '1',
                    maxHeight: '100vh',
                }}
            >
                {/*First Grid Item*/}
                <Grid
                    item
                    xs={12} sm={12} md={12} lg={12}
                    sx={{
                        gridArea: '1 / 1 / 2 / 2',
                        border: 'dashed 1px yellow'
                    }}>
                
                    1
                </Grid>
                {/*Second Grid Item*/}
                <Grid
                    item
                    xs={12} sm={12} md={12} lg={12}
                    sx={{
                        gridArea: '2 / 1 / 3 / 2',
                        border: 'dashed 1px yellow'
                    }}>

                    2
                </Grid>
                {/*Third Grid Item*/}
                <Grid
                    item
                    xs={12} sm={12} md={12} lg={12}
                    sx={{
                        gridArea: '1 / 2 / 3 / 3',
                        border: 'dashed 1px yellow'
                    }}
                >
                    3
                </Grid>
            </Grid>
            <Footer />
        </Box>
    )
}