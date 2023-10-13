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
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: '96px',
                    height: '100%',
                    maxHeight: '100vh',
                    width: '100%',
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
                        width: '100%',
                        minWidth: '240px',
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
                            height: '100%',
                            width: '100%'
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
                        flexShrink: '1',
                        width: '100%',
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
                            {Object.keys(leagues[sportSelected].teams).map((key) => (
                                <li
                                    key={key}
                                    align='center'
                                    style={{
                                        margin: '8px',
                                        height: '100%',
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