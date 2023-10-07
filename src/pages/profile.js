import '../styles/profile.css'
import { NavBar } from "../components/authnav"
import { Footer } from '../components/authfoot';
import { Grid, Typography, Avatar } from '@mui/material';
import { Box, Container } from '@mui/system';

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
                    <Container
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            height: '100%',
                            alignItems: 'start',
                            paddingLeft: '0 !important',
                            color: 'white'
                        }}>
                        <Avatar
                            variant='square'
                            alt='profile picture'
                            src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
                            sx={{
                                height: '104px',
                                width: '104px'
                            }} />
                        <Typography
                            variant='h3'
                            style={{
                                marginLeft: '24px'
                            }}

                        >
                            Brandon
                            {/*The name will be dynamicall rendered*/}
                        </Typography>
                    </Container>
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