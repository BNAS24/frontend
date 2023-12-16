import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Avatar, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/authfoot';
import { NavBar } from '../../components/authnav';
import { SideBarNav } from '../../components/helpers/sidebarnav';
import { useSidebar } from '../../context/mobilenav';
import leagues from '../../datastore/leagues';
import '../../styles/livescores.css';
import Paper from '@mui/material/Paper';
import { LeaguesList, LeagueTitle, LeagueSelect, LiveScoreContent, LiveScorePageWrap, TeamsData } from './subcomponents.js/livescoresStyledComponents';



export const LiveScores = () => {

    const [sportSelected, setSportSelected] = useState(null)

    const [teamSelected, setTeamSelected] = useState(false)

    const [teamData, setTeamData] = useState(null)

    const { isSidebarOpen } = useSidebar();

    const [data, setData] = useState([
        { team: 'Home', scores: [0, 0, 6, 0], total: 6 },
        { team: 'Away', scores: [20, 0, 3, 0], total: 23, totalColor: true },
    ]);

    const handleTeamData = (index) => {
        if (index !== undefined) {
            setTeamSelected(true);
            setTeamData(leagues[sportSelected].teams[index]);
        } else {
            setTeamSelected(false);
            setTeamData(null);
        }
    }

    return (
        <LiveScorePageWrap
            /* Wrapper */
            maxWidth='100%'
            disableGutters={true}
        >
            <NavBar />

            <LiveScoreContent
                disableGutters={true}
            >
                <LeagueSelect
                    disableGutters={true}
                >
                    <LeagueTitle
                        variant='h3'
                        align='center'
                    >
                        Sports Categories
                    </LeagueTitle>
                    <LeaguesList>
                        {Object.keys(leagues).map((key) => (
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
                    </LeaguesList>
                </LeagueSelect>
                <TeamsData
                    disableGutters={true}
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
                                    mt: '32px',
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
                                    mt: '32px',
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
                                    className='sport-selected-active-state'
                                >
                                    Week 5
                                </Typography>
                            </Container>
                            <Container
                                disableGutters={true}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-around',
                                    height: '70%',
                                    width: '100%',
                                    mt: '32px',
                                    border: '1px solid var(--theme-orange)',
                                    overflow: 'hidden',
                                }}
                            >
                                <Container
                                    disableGutters={true}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        height: '50%',
                                        width: '100%',
                                    }}
                                >
                                    <Container
                                        disableGutters={true}
                                        sx={{
                                            flexShrink: '1',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-evenly',
                                            alignItems: 'center',
                                            height: '100%',
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

                                    {/*Middle Container for the team live scores */}

                                    <Container
                                        disableGutters={true}
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            height: '100%',
                                            // border: '1px solid var(--theme-orange)',
                                        }}
                                    >
                                        <TableContainer
                                            component={Paper}
                                            sx={{
                                                // backgroundColor: 'var(--theme-blue)',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            <Table> 
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell
                                                            colSpan={6}
                                                            align="center"
                                                        >
                                                            Final
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell
                                                            style={{ color: 'red' }}>
                                                            Live
                                                        </TableCell>
                                                        <TableCell>
                                                            1
                                                        </TableCell>
                                                        <TableCell>
                                                            2
                                                        </TableCell>
                                                        <TableCell>
                                                            3
                                                        </TableCell>
                                                        <TableCell>
                                                            4
                                                        </TableCell>
                                                        <TableCell>
                                                            T
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {data.map((row, index) => (
                                                        <TableRow
                                                            key={index}
                                                        >
                                                            <TableCell>
                                                                {row.team}
                                                            </TableCell>
                                                            {row.scores.map((score, i) => (
                                                                <TableCell
                                                                    key={i}
                                                                >
                                                                    {score}
                                                                </TableCell>
                                                            ))}
                                                            <TableCell
                                                                style={row.totalColor ? { color: 'orange' } : {}}>
                                                                {row.total}
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Container>
                                    <Container
                                        disableGutters={true}
                                        sx={{
                                            flexShrink: '1',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            height: '100%',
                                        }}
                                    >
                                        <Container
                                            disableGutters={true}
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-evenly',
                                                alignItems: 'center',
                                                height: '100%',
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
                                                Other Team
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
                                    disableGutters={true}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-around',
                                        alignItems: 'center',
                                        height: '50%',
                                        width: '100%',
                                    }}
                                >
                                    <Link
                                        to='/forums'
                                    >
                                        Team Forums
                                    </Link>
                                    <Link
                                        to='/live-scores'
                                    >
                                        Fixtures
                                    </Link>
                                    <Link
                                        to='/live-scores'
                                    >
                                        Team News
                                    </Link>
                                    <Link
                                        to='/live-scores'
                                    >
                                        League Standings
                                    </Link>
                                </Container>
                            </Container>
                        </Container>
                    ) : null}
                </TeamsData>
                {isSidebarOpen && (
                    <SideBarNav />
                )}
            </LiveScoreContent>
            <Footer />
        </LiveScorePageWrap>
    )
}