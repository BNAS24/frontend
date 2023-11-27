import { Typography, IconButton } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import { Footer } from '../components/authfoot'
import { NavBar } from '../components/authnav'
import { SideBarNav } from '../components/helpers/sidebarnav'
import { useSidebar } from '../context/mobilenav'
import leagues from '../datastore/leagues'
import '../styles/livescores.css'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';


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
                                    marginTop: '32px'
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
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    className='links-hover-state'
                                >
                                    Week 4
                                </Typography>
                            </Container>
                            <Container
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-around',
                                    height: '75%',
                                    width: '100%',
                                    marginTop: '32px',
                                    border: '1px solid var(--theme-orange)'
                                }}
                            >
                                <Container
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '45%',
                                        width: '100%',
                                        border: '1px solid var(--theme-orange)',
                                    }}
                                >
                                    1
                                </Container>
                                <Container
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '45%',
                                        width: '100%',
                                        border: '1px solid var(--theme-orange)',

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