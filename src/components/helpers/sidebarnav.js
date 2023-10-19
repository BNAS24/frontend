import { Fragment } from "react"
import { NavLink } from "react-router-dom"
import customTheme from '../../styles/context/customtheme'
import '../styles/authnav.css'

export const SideBarNav = () => {

    return (
        <Fragment>
            <div
                style={{
                    position: 'absolute',
                    right: '0',
                    height: '100%',
                    width: '75%',
                    backgroundColor: 'var(--theme-blue)',
                    borderLeft: 'solid 0.5px var(--theme-orange)',
                    zIndex: 101
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '64px',
                        height: '100%'
                    }}
                >
                    <p
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexShrink: '1',
                            width: '100%',
                            margin: '0 auto',
                            fontSize: '2rem',
                        }}
                    >
                        <NavLink
                            className='links-hover-state'
                            to='/dashboard'
                            style={({ isActive }) => ({ color: isActive ? customTheme.palette.secondary.main : null })}>
                            Dashboard
                        </NavLink>
                    </p>
                    <p
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexShrink: '1',
                            width: '100%',
                            margin: '0 auto',
                            fontSize: '2rem',
                        }}
                    >
                        <NavLink
                            className='links-hover-state'
                            to='/forums'
                            style={({ isActive }) => ({ color: isActive ? customTheme.palette.secondary.main : null })}>
                            Forums
                        </NavLink>
                    </p>
                    <p
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexShrink: '1',
                            width: '100%',
                            margin: '0 auto',
                            fontSize: '2rem',
                        }}
                    >
                        <NavLink
                            className='links-hover-state'
                            to='/live-scores'
                            style={({ isActive }) => ({ color: isActive ? customTheme.palette.secondary.main : null })}>
                            Live Scores
                        </NavLink>
                    </p>
                    <p
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexShrink: '1',
                            width: '100%',
                            margin: '0 auto',
                            fontSize: '2rem',
                        }}
                    >
                        <NavLink
                            className='links-hover-state'
                            to='/profile'
                            style={({ isActive }) => ({ color: isActive ? customTheme.palette.secondary.main : null })}>
                            Profile
                        </NavLink>
                    </p>
                </div>
            </div>
            <div
                style={{
                    position: 'absolute',
                    left: '0',
                    height: '100%',
                    width: '25%',
                    backgroundColor: 'var(--modal-dropback)',
                    zIndex: 101
                }}
            >
            </div>
        </Fragment>
    )
}
