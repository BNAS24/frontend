import { Container } from "@mui/system";
import {
    Avatar,
    Button,
    Typography,
} from "@mui/material";
import { Footer } from "../../../../components/authfoot";
import { NavBar } from "../../../../components/authnav";
import { Link } from "react-router-dom";
import { ThemeProvider } from '@emotion/react';
import customTheme from '../../../../context/muiTheme/customtheme'

export const ForumResultPres = ({
    forumId,
    forumDataState,
}) => {
    return (

        <ThemeProvider theme={customTheme}>
            <Container
                disableGutters={true}
                maxWidth="xl"

                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    minHeight: '100%',
                    width: '100%'
                }}
            >
                <NavBar />

                <Container
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        maxHeight: '100vh',
                        height: '100%',
                        width: '100%',
                        overflow: 'hidden',
                    }}
                >
                    <Container
                        disableGutters={true}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '90%',
                            width: '85%',
                            border: 'dashed 1px var(--theme-orange)',
                        }}
                    >
                        <Container
                            disableGutters={true}
                            sx={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar
                                variant='square'
                                alt='Forum image'
                                src='/placeholder-avatar.webp'
                                sx={{
                                    height: '144px',
                                    width: '144px',
                                }}
                            />

                            <Typography
                                align='center'
                                variant='h4'
                            >

                                {forumDataState?.name}

                            </Typography>

                            <Button
                                variant='outline'
                                sx={{
                                    color: 'var(--theme-orange)',
                                    '&:hover': {
                                        border: '1px solid var(--theme-orange)',
                                        color: 'var(--theme-orange)',
                                    },
                                }}
                            >
                                Follow
                            </Button>

                        </Container>
                        <Container
                            disableGutters={true}
                            sx={{
                                flex: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                padding: '48px',
                            }}
                        >
                            {forumDataState?.threads ? forumDataState.threads.map(thread => (
                                <Link
                                    to={`/forums/${forumId}/thread/${thread._id}`}
                                    key={thread._id}
                                >
                                    <Typography
                                        align='center'
                                        variant='h6'
                                        key={thread._id}
                                        className='links-hover-state'
                                        sx={{
                                            width: '100%',
                                            textDecoration: 'underline',
                                        }}
                                    >
                                        {thread.title}

                                    </Typography>
                                </Link>
                            )) : null}
                        </Container>
                    </Container>

                </Container>

                <Footer />
            </Container>
        </ThemeProvider>
    )
};
