// This will be a nav component that you can reuse for your pages.
import './styles/authnav.css'
import { NavLink } from "react-router-dom"
import customTheme from "../styles/context/customtheme"

export const NavBar = () => {
    return (
        <nav className='header-container'>
            <div className='logo_name_container'>
                <img src='https://i.postimg.cc/wjkpvXx7/fans.png' className='sports-fanatic-logo' alt='logo' />
                <div className='title'>Sports Fanatic</div>
            </div>
            <div className='nav-container'>
                <p><NavLink className='links-hover-state' to='/dashboard' style={({ isActive }) => ({ color: isActive ? customTheme.palette.secondary.main : null })}>Dashboard</NavLink></p>
                <p><NavLink className='links-hover-state' to='/forums' style={({ isActive }) => ({ color: isActive ? customTheme.palette.secondary.main : null })}>Forums</NavLink></p>
                <p><NavLink className='links-hover-state' to='/live-scores' style={({ isActive }) => ({ color: isActive ? customTheme.palette.secondary.main : null })}>Live Scores</NavLink></p>
                <p><NavLink className='links-hover-state' to='/profile' style={({ isActive }) => ({ color: isActive ? customTheme.palette.secondary.main : null })}>Profile</NavLink></p>
            </div>
        </nav>
    )
}