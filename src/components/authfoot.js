//This will be a footer component that you can reuse for your pages.
import './styles/authfoot.css'

export const Footer = () => {
    return (
        <footer className='footer-container'>
            <p className='copyright'>© 2023 Copyright  Sports Fanatic Hub</p>
            <div className='nav-container'>
                <p className='homepage-links-hover-state'>About Us</p>
                <p className='homepage-links-hover-state'>Contact Us</p>
            </div>
        </footer>
    )
}