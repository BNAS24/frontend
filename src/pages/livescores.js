import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined'
import { Avatar, Grid, IconButton, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import { Footer } from '../components/authfoot'
import { NavBar } from '../components/authnav'
import { SideBarNav } from '../components/helpers/sidebarnav'
import { useSidebar } from '../context/mobilenav'
import leagues from '../datastore/leagues'
import '../styles/livescores.css'


export const LiveScores = () => {

    const [sportSelected, setSportSelected] = useState(null)

    const [teamSelected, setTeamSelected] = useState(false)

    const [teamData, setTeamData] = useState(null)

    const { isSidebarOpen } = useSidebar();

    const handleTeamData = (index) => {
        if (index !== undefined) {
            setTeamSelected(true);
            setTeamData(leagues[sportSelected].teams[index]);
        } else {
            // No team selected, reset state
            setTeamSelected(false);
            setTeamData(null);
        }
    }

    return (
        <Container
            /* Wrapper */
            maxWidth='100%'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100%',
                height: '100%',
                width: '100%',
                paddingLeft: '0 !important',
                paddingRight: '0 !important',
            }}
        >
            <NavBar />

            <Container

                sx={{
                    flex: '1',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: {
                        xs: '16px',
                        sm: '40px',
                        md: '40px',
                        lg: '40px',

                    },
                    height: '100%',
                    maxHeight: '100vh',
                    width: '100%',
                    minWidth: '286',
                    paddingLeft: '0 !important',
                    paddingRight: '0 !important',
                    overflowY: 'hidden',
                }}
            >
                <Container

                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        flexShrink: '1',
                        width: '50%',
                        minWidth: '142px',
                        borderLeft: 'solid 1px var(--theme-orange)',
                        borderRight: 'solid 1px var(--theme-orange)',
                        paddingLeft: '0 !important',
                        paddingRight: '0 !important',
                        overflow: 'auto',
                    }}
                >
                    <Typography
                        variant='h3'
                        align='center'
                        sx={{
                            marginTop: '24px',
                            fontSize: {
                                xs: '1.5rem',
                                sm: '3rem',
                                md: '3rem',
                                lg: '3rem',
                            },
                            paddingRight: {
                                xs: '8px !important',
                                sm: '0 ',
                                md: '0 ',
                                lg: '0 ',
                            },
                        }}
                    >
                        Sports Categories
                    </Typography>
                    <Container
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                            height: '100%',
                            width: '100%'
                        }}
                    >
                        {
                            Object.keys(leagues).map((key) => (
                                <Typography
                                    key={key}
                                    onClick={() => {
                                        setSportSelected(key)
                                        handleTeamData()
                                    }}
                                    className={sportSelected === key ? 'links-hover-state sport-selected-active-state' : 'links-hover-state'}
                                >
                                    {leagues[key].title}
                                </Typography>
                            ))
                        }
                    </Container>
                </Container>
                <Container
                    sx={{
                        display: 'flex',
                        position: 'relative',
                        flexShrink: '1',
                        width: '50%',
                        minWidth: '144px',
                        justifyContent: 'center',
                        paddingLeft: '0 !important',
                        paddingRight: '0 !important',
                        color: 'white',

                    }}
                >
                    {leagues[sportSelected] ? (
                        <ul
                            style={{

                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                padding: '0',
                                margin: '0',
                                height: '100%',
                                maxHeight: '100%',
                                width: '100%',
                                listStyleType: 'none',
                                WebkitColumnCount: 2,
                                MozColumnCount: 2,
                                columnCount: 2,
                                borderLeft: 'solid 1px var(--theme-orange)',
                                borderRight: 'solid 1px var(--theme-orange)',
                                overflow: 'auto'
                            }}
                        >
                            {Object.keys(leagues[sportSelected].teams).map((key, index) => (
                                <li
                                    key={key}
                                    align='center'
                                    style={{
                                        margin: '8px',
                                        height: '100%',
                                    }}
                                    className={sportSelected === key ? 'links-hover-state sport-selected-active-state' : 'links-hover-state'}
                                    onClick={() => handleTeamData(index)}
                                >
                                    {leagues[sportSelected].teams[key]}
                                </li>
                            ))}
                        </ul>
                    ) : null}
                    {teamSelected ? (
                        <Container
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                height: '100%',
                                width: '100%',
                                position: 'absolute',
                                backgroundColor: 'var(--theme-blue)',
                                borderLeft: 'solid 1px var(--theme-orange)',
                                borderRight: 'solid 1px var(--theme-orange)',
                                zIndex: '100',
                            }}
                        >
                            <Typography
                                sx={{
                                    marginTop: '32px',
                                    fontSize: '1.5em',
                                }}
                            >
                                {teamData}
                            </Typography>
                            <Container
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignContent: 'center',
                                    gap: '24px',
                                    marginTop: '32px',
                                    border: '1px solid var(--theme-orange)',
                                    overflowX: 'auto',
                                    overflowY: 'hidden',
                                }}
                            >
                                <IconButton>
                                    <ArrowBackIosNewOutlinedIcon
                                        sx={{
                                            color: 'var(--theme-orange)'
                                        }}
                                    />
                                </IconButton>

                                {/*Turn this the code below into a map of typography instead */}
                                <Typography
                                    align='center'
                                    noWrap
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    className='links-hover-state'
                                >
                                    Week 1
                                </Typography>
                                <Typography
                                    align='center'
                                    noWrap
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    className='links-hover-state'

                                >
                                    Week 2
                                </Typography>
                                <Typography
                                    align='center'
                                    noWrap
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    className='links-hover-state'
                                >
                                    Week 3
                                </Typography>
                                <Typography
                                    align='center'
                                    noWrap
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    className='links-hover-state'
                                >
                                    Week 4
                                </Typography>
                                <Typography
                                    align='center'
                                    noWrap
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    className='links-hover-state'
                                >
                                    Week 5
                                </Typography>
                            </Container>
                            <Container
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-around',
                                    height: '70%',
                                    width: '100%',
                                    marginTop: '32px',
                                    border: '1px solid var(--theme-orange)',
                                    paddingLeft: '0 !important',
                                    paddingRight: '0 !important',
                                }}
                            >
                                <Container
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        height: '50%',
                                        width: '100%',
                                        paddingLeft: '0 !important',
                                        paddingRight: '0 !important',
                                    }}
                                >
                                    <Container
                                        sx={{
                                            flexShrink: '1',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-evenly',
                                            alignItems: 'center',
                                            height: '100%',
                                            paddingLeft: '0 !important',
                                            paddingRight: '0 !important',
                                        }}
                                    >
                                        <Avatar
                                            variant='square'
                                            alt='team logo'
                                            src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
                                            sx={{
                                                height: '96px',
                                                width: '96px',
                                            }}
                                        >
                                        </Avatar>
                                        <Typography

                                            align='center'
                                        >
                                            {teamData}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: '1.3em',
                                                color: 'var(--theme-orange)'
                                            }}
                                        >
                                            23
                                        </Typography>
                                    </Container>
                                    <Container
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            height: '100%',
                                            paddingLeft: '0 !important',
                                            paddingRight: '0 !important',
                                        }}
                                    >
                                        <Grid
                                            container
                                            sx={{
                                                flexGrow: '0',
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(5, 1fr)',
                                                gridTemplateRows: 'repeat(5, 1fr)',
                                                columnGap: '8px',
                                                width: '100%',
                                                paddingLeft: '0 !important',
                                                paddingRight: '0 !important',
                                            }}
                                        >
                                            <Grid
                                                item
                                                align='center'
                                                sx={{
                                                    gridArea: '1/1/2/6',
                                                }}
                                            >
                                                <Typography
                                                    align='center'
                                                >
                                                    Final
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                align='center'
                                                sx={{
                                                    gridArea: '2/1/3/2',
                                                    paddingTop: '4px',

                                                }}
                                            >
                                                <Typography
                                                    align='center'
                                                >
                                                    Q
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                sx={{
                                                    gridArea: '2/2/3/5',
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent: 'center',
                                                    gap: '8px',
                                                    paddingTop: '4px',
                                                }}
                                            >
                                                <Typography
                                                    align='center'
                                                >
                                                    1
                                                </Typography>
                                                <Typography
                                                    align='center'
                                                >
                                                    2
                                                </Typography>
                                                <Typography
                                                    align='center'
                                                >
                                                    3
                                                </Typography>
                                                <Typography
                                                    align='center'
                                                >
                                                    4
                                                </Typography>
                                            </Grid>
                                            <Typography
                                                align='center'
                                                sx={{
                                                    gridArea: '2/5/3/6',
                                                    paddingTop: '4px',
                                                }}
                                            >
                                                T
                                            </Typography>
                                            <Typography
                                                align='center'
                                                sx={{
                                                    gridArea: '3/1/4/6',
                                                }}
                                            >
                                                <hr></hr>
                                            </Typography>
                                            <Grid
                                                align='center'
                                                sx={{
                                                    gridArea: '4/1/5/2',
                                                }}
                                            >
                                                <Typography>
                                                    HOME
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                sx={{
                                                    gridArea: '4/2/5/5',
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent: 'center',
                                                    gap: '8px',
                                                }}
                                            >
                                                <Typography
                                                    align='center'
                                                >
                                                    0
                                                </Typography>
                                                <Typography
                                                    align='center'
                                                >
                                                    0
                                                </Typography>
                                                <Typography
                                                    align='center'
                                                >
                                                    23
                                                </Typography>
                                                <Typography
                                                    align='center'
                                                >
                                                    0
                                                </Typography>
                                            </Grid>
                                            <Typography
                                                align='center'
                                                sx={{
                                                    gridArea: '4/5/5/6',
                                                    color: 'var(--theme-orange)'
                                                }}
                                            >
                                                23
                                            </Typography>
                                            <Grid
                                                item
                                                align='center'
                                                sx={{
                                                    gridArea: '5/1/6/2',
                                                }}
                                            >
                                                AWAY
                                            </Grid>
                                            <Grid
                                                item
                                                align='center'
                                                sx={{
                                                    gridArea: '5/2/6/5',
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent: 'center',
                                                    gap: '8px',
                                                }}
                                            >
                                                <Typography
                                                    align='center'
                                                >
                                                    06
                                                </Typography>
                                                <Typography
                                                    align='center'
                                                >
                                                    0
                                                </Typography>
                                                <Typography
                                                    align='center'
                                                >
                                                    0
                                                </Typography>
                                                <Typography
                                                    align='center'
                                                >
                                                    0
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                align='center'
                                                sx={{
                                                    gridArea: '5/5/6/6',
                                                }}
                                            >
                                                6
                                            </Grid>
                                        </Grid>
                                    </Container>
                                    <Container
                                        sx={{
                                            flexShrink: '1',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            height: '100%',
                                            paddingLeft: '0 !important',
                                            paddingRight: '0 !important',
                                        }}
                                    >
                                        <Container
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-evenly',
                                                alignItems: 'center',
                                                height: '100%',
                                                paddingLeft: '0 !important',
                                                paddingRight: '0 !important',
                                            }}
                                        >
                                            <Avatar
                                                variant='square'
                                                alt='team logo'
                                                src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
                                                sx={{
                                                    height: '96px',
                                                    width: '96px',
                                                }}
                                            >
                                            </Avatar>
                                            <Typography

                                                align='center'
                                            >
                                                Another Team
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: '1.3em',
                                                }}
                                            >
                                                6
                                            </Typography>
                                        </Container>
                                    </Container>
                                </Container>
                                <Container
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '50%',
                                        width: '100%',
                                        border: '1px solid var(--theme-orange)',
                                        paddingLeft: '0 !important',
                                        paddingRight: '0 !important',
                                    }}
                                >
                                    2
                                </Container>
                            </Container>
                        </Container>
                    ) : null}
                </Container>
                {isSidebarOpen && (
                    <SideBarNav />
                )}
            </Container>
            <Footer />
        </Container>
    )
}