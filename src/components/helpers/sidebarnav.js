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
                    zIndex: 100
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <p>
                        <NavLink className='links-hover-state' to='/dashboard' style={({ isActive }) => ({ color: isActive ? customTheme.palette.secondary.main : null })}>
                            Dashboard
                        </NavLink>
                    </p>
                    <p>
                        <NavLink className='links-hover-state' to='/forums' style={({ isActive }) => ({ color: isActive ? customTheme.palette.secondary.main : null })}>
                            Forums
                        </NavLink>
                    </p>
                    <p>
                        <NavLink className='links-hover-state' to='/live-scores' style={({ isActive }) => ({ color: isActive ? customTheme.palette.secondary.main : null })}>
                            Live Scores
                        </NavLink>
                    </p>
                    <p>
                        <NavLink className='links-hover-state' to='/profile' style={({ isActive }) => ({ color: isActive ? customTheme.palette.secondary.main : null })}>
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
                    zIndex: 100
                }}
            >
            </div>
        </Fragment>
    )
}
