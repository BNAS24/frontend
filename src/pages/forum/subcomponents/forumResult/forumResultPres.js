import { Container } from "@mui/system";
import {
    Avatar,
    Button,
    Typography,
} from "@mui/material";
import { Footer } from "../../../../components/authfoot";
import { NavBar } from "../../../../components/authnav";
import {
    ForumDataDisplay,
    TopContainer
} from "../forumsStyledComponents";

export const ForumResultPres = () => {
    return (
        <>
            <NavBar />

            <ForumDataDisplay
                maxWidth='xl'
                disableGutters={true}
            >
                <TopContainer
                    maxWidth='xl'
                >
                    <Container
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '8px',
                            width: 'auto',
                            alignItems: 'center'
                        }}
                    >
                        <Avatar
                            alt='Forum Image'
                            variant='square'
                            sx={{
                                height: {
                                    xs: '16px',
                                    sm: '64px',
                                    md: '64px',
                                    lg: '64px',
                                },
                                width: {
                                    xs: '16px',
                                    sm: '64px',
                                    md: '64px',
                                    lg: '64px',
                                }
                            }}
                        />
                        <Button
                            variant='text'
                            sx={{
                                color: 'var(--theme-orange)',
                                '&:hover': {
                                    backgroundColor: 'rgba(242, 97, 1, 0.2)',
                                },
                            }}
                        >
                            Follow
                        </Button>
                    </Container>
                    <Typography
                        align='center'
                        variant='h3'
                        sx={{
                            flex: '1',
                            fontSize: {
                                xs: '0.6rem',
                                sm: '1rem',
                                md: '1rem',
                                lg: '1rem',
                            }
                        }}
                    >
                        {/* {forumData ? (
                            <Typography>
                                {forumData[0].thread.title}
                            </Typography>
                        ) : null} */}

                    </Typography>

                    {/*Button To Create a Post*/}

                    <Button
                        variant='text'
                        // onClick={openPostModal}
                        sx={{
                            color: 'var(--theme-orange)',
                            '&:hover': {
                                backgroundColor: 'rgba(242, 97, 1, 0.2)',
                            },
                        }}
                    >
                        Create Forum
                    </Button>
                </TopContainer>
            </ForumDataDisplay>

            <Footer />
        </>
    )
};
