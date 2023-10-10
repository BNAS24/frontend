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
            maxWidth='xl'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100%',
                width: '100%',
                border: '1px dashed yellow',
                paddingLeft: '0 !important',
                paddingRight: '0 !important',
            }}
        >
            <NavBar />
            <Container
                maxWidth='xl'
                sx={{
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: '96px',
                    height: '100%',
                    width: '100%',
                    border: 'solid 1px red'
                }}
            >
                <Container

                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        border: 'dashed 1px yellow'
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
                        }}
                    >
                        {
                            Object.keys(leagues).map((key) => (
                                <Typography
                                    key={key}
                                    onClick={() => { setSportSelected(key) && console.log(sportSelected)}}
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
                        color: 'white',
                        justifyContent: 'center',
                        border: 'dashed 1px yellow'
                    }}
                >
                    <Container>
                        1
                    </Container>
                    <Container>2</Container>
                </Container>
            </Container>
            <Footer />
        </Container>
    )
}