import React from 'react'
import '../styles/livescores.css'
import { NavBar } from '../components/authnav'
import { Footer } from '../components/authfoot'
import { useState } from 'react'
import { Container } from '@mui/system'
import { Typography } from '@mui/material'
import leagues from '../datastore/leagues'

export const LiveScores = () => {

    const [sportSelected, setSportSelected] = useState(null)

    return (
        <Container
            /* Wrapper */
            maxWidth='100%'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100%',
                width: '100%',
                paddingLeft: '0 !important',
                paddingRight: '0 !important',
                overflow: 'hidden',
            }}
        >
            <NavBar />

            <Container

                sx={{
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: '96px',
                    height: '100%',
                    width: '100%',
                    paddingLeft: '0 !important',
                    paddingRight: '0 !important',
                }}
            >
                <Container

                    sx={{
                        display: 'flex',
                        flexShrink: '1',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        borderLeft: 'solid 1px var(--theme-orange)',
                        borderRight: 'solid 1px var(--theme-orange)',
                        paddingLeft: '0 !important',
                        paddingRight: '0 !important',
                    }}
                >
                    <Typography
                        variant='h3'
                        align='center'
                        sx={{
                            marginTop: '24px'
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
                            height: '100%'
                        }}
                    >
                        {
                            Object.keys(leagues).map((key) => (
                                <Typography
                                    key={key}
                                    onClick={() => {
                                        setSportSelected(key);
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
                        flexShrink: '',
                        height: 'auto',
                        color: 'white',
                        justifyContent: 'center',
                        paddingLeft: '0 !important',
                        paddingRight: '0 !important',
                        overflow: 'auto'

                    }}
                >
                    {leagues[sportSelected] ? (
                        <ul
                            style={{

                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                listStyleType: 'none',
                                padding: '0',
                                margin: '0',
                                WebkitColumnCount: 2,
                                MozColumnCount: 2,
                                columnCount: 2,
                                border: 'dashed 1px purple',

                            }}
                        >
                            {Object.keys(leagues[sportSelected].teams).map((key) => (
                                <li
                                    key={key}
                                    align='center'
                                    style={{
                                        flex: '0 0 auto',
                                        margin: '8px'
                                    }}
                                    className={sportSelected === key ? 'links-hover-state sport-selected-active-state' : 'links-hover-state'}
                                >
                                    {leagues[sportSelected].teams[key]}
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </Container>
            </Container>
            <Footer />
        </Container >
    )
}